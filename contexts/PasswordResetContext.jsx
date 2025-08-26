import { useStorageState } from "@/hooks/useStorageState";
import { use, createContext, useMemo } from "react";

// CONTEXTO UTILIZADO PARA EVITAR QUE O FLUXO DE REDEFINIÇÃO DA SENHA SEJA QUEBRADO

const PasswordResetContext = createContext();
const cooldownMs = 60 * 60 * 1000; // email com uma hora de validade

export function useRecovery() {
  const value = use(PasswordResetContext);
  if (!value) {
    throw new Error('useRecovery must be wrapped in a <RecoveryProvider />');
  }

  return value;
}

export function RecoveryProvider({ children }) {
  const [[isEmailLoading, recoveryEmail], setRecoveryEmail] = useStorageState("recovery-email");
  const [[isCodeLoading, recoveryCode], setRecoveryCode] = useStorageState("recovery-code");

  const registerEmail = async (email) => {
    const emailData = {
      email,
      creationTime: new Date().getTime()
    };
    setRecoveryEmail(emailData);
  };

  const getEmail = () => {
    if (!recoveryEmail) return null;
    const created = recoveryEmail.creationTime || 0;
    const ttl = cooldownMs;
    const expired = Date.now() - created > ttl;
    return expired ? null : recoveryEmail.email;
  };

  const setCode = (code) => {
    setRecoveryCode(code);
  };

  const getCode = () => {
    return recoveryCode;
  };

  const resetCodeAndEmail = () => {
    setRecoveryEmail(getEmail());
    setRecoveryCode(getCode());
  };

  const value = useMemo(() => ({
    registerEmail,
    getEmail,
    setCode,
    getCode,
    resetCodeAndEmail,
    isEmailLoading,
    isCodeLoading
  }), [recoveryEmail, recoveryCode, isEmailLoading, isCodeLoading]);

  return (
    <PasswordResetContext value={value}>
      {children}
    </PasswordResetContext>
  );
}
