import { useStorageState } from "@/hooks/useStorageState";
import { use, createContext } from "react";
import axios from "axios";

// CONTEXTO UTILIZADO PARA EVITAR QUE O FLUXO DE REDEFINIÇÃO DA SENHA SEJA QUEBRADO

const PasswordResetContext = createContext(undefined);

const baseBackendUrl = process.env.EXPO_PUBLIC_API_URL;

export function RecoveryProvider({ children }) {
    const [[isLoading, state], setState] = useStorageState('session');
    
    const requestRecovery = async (email) => {
    try {
      const response = await axios.post(baseBackendUrl + '/auth/recuperar-senha', { email });
      if (response.status === 200) {
        const now = Date.now();
        await setState({ 
            email, 
            requestedAt: now 
        });
        return { success: true };
      } else {
        return { success: false, status: response.status };
      }
    } catch (error) {
      // backend retorna 400 se já existe código ativo
      if (error.response && error.response.status === 400) {
        return { success: false, status: 400 };
      }
      // outro erro de rede
      throw error;
    }
  };

  const validateCode = async (code) => {
    try {
      const response = await axios.post(baseBackendUrl + "/auth/redefinir-senha", { email: state.email, code });
      if (response.status === 200) {
        return { success: true };
      } else {
        return { success: false, status: response.status };
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        return { success: false, status: 400 };
      }
      throw error;
    }
  };

    const resetPassword = async (newPassword, code) => {
    try {
      const response = await axios.post(baseBackendUrl + "/auth/redefinir-senha", { email: state.email, code, newPassword });
      if (response.status === 200) {
        await clear(); // sucesso — limpar estado local
        return { success: true };
      } else {
        return { success: false, status: response.status };
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        return { success: false, status: 400 };
      }
      throw error;
    }
  };


  return (
    <PasswordResetContext.Provider value={{
      state,
      isLoading,
      requestRecovery,
      validateCode,
      resetPassword,
    }}>
      {children}
    </PasswordResetContext.Provider>
  );
}

export function useRecovery() {
  const value = use(PasswordResetContext);
  if (!value) {
    throw new Error('useRecovery must be wrapped in a <RecoveryProvider />');
  }

  return value;
}
