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
const baseBackendUrl = process.env.EXPO_PUBLIC_API_URL

export function useSession() {
  const value = use(AuthContext);
  if (!value) {
    throw new Error('useSession must be wrapped in a <SessionProvider />');
  }

  return value;
}

export function SessionProvider({ children }) {
  const [[isLoading, session], setSession] = useStorageState('session');

  return (
    <AuthContext
      value={{
        signIn: async (data) => {
        // Método POST do Axios, enviando os dados de cadastro a URL do backend
        // Em caso de sucesso, imprime no console e redireciona o usuário a página principal
        const response = await axios.post(baseBackendUrl + "/auth/login", data)
            .then(function () {
                router.replace("home");
            })
            .catch(function (error) {
                console.log(error);
            });
        setSession(response);
        },
        signOut: () => {
          setSession(null);
        },
        session,
        isLoading,
      }}>
      {children}
    </AuthContext>
  );
}