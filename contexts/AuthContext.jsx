import { useStorageState } from "@/hooks/useStorageState";
import { use, createContext } from "react";
import { router } from "expo-router";
import axios from "axios";

const AuthContext = createContext();

/* 
* URL do backend local configurado no .env
* (precisa ser o ip e estar na mesma rede, caso contrário, deverá ser
* um servidor em nuvem que possa receber essa requisição)
*/
const baseBackendUrl = process.env.EXPO_PUBLIC_API_URL;

export function useSession() {
  const value = use(AuthContext);
  if (!value) {
    throw new Error('useSession must be wrapped in a <SessionProvider />');
  }

  return value;
}

export function SessionProvider({ children }) {
  const [[isLoading, sessionRaw], setSession] = useStorageState('session');
  const session = sessionRaw ? JSON.parse(sessionRaw) : null;

  return (
    <AuthContext
      value={{
        signIn: async (data) => {
          // Método POST do Axios, enviando os dados de cadastro a URL do backend
          // Em caso de sucesso, imprime no console e redireciona o usuário a página principal
          try {
            const response = await axios.post(baseBackendUrl + "/auth/login", data);
            console.log("Login funcionando: ", response.data);

            setSession(JSON.stringify({
              name: response.data.name,
              token: response.data.token,
              streakDays: response.data.streakDays,
              coins: response.data.coins
            }));
          } catch (error) {
            let msg = "Erro desconhecido";
            if (error.response) {
              msg = `Status: ${error.response.status} - ${JSON.stringify(error.response.data)}`;
            } else if (error.message) {
              msg = error.message;
            }
            throw new Error("Erro ao realizar login: " + msg);
          }
        },
        signOut: () => {
          setSession(null);
          router.replace("/");
        },
        session,
        isLoading,
      }}>
      {children}
    </AuthContext>
  );
}