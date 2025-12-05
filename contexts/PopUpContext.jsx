import { Toast, ToastTitle, ToastDescription, useToast } from "@/components/ui/toast";
import { createContext, use, useState } from "react";

const PopUpContext = createContext();

export function usePopUp() {
  const value = use(PopUpContext);
  if (!value) {
    throw new Error("usePopUp must be wrapped in a <PopUpProvider />");
  }

  return value;
}

export function PopUpProvider({ children }) {
  const toast = useToast();

  const [toastId, setToastId] = useState(0);

  const showDefaultToast = (title, description, action, placement) => {
    if (!toast.isActive(toastId)) {
      newToast(title, description, action, placement);
    }
  };

  const newToast = (title, description, action = "muted", placement = "top") => {
    const newId = Math.random();
    setToastId(newId);
    toast.show({
      id: newId,
      placement: placement,
      duration: 3000,
      render: ({ id }) => {
        const uniqueToastId = "toast-" + id;
        return (
          <Toast nativeID={uniqueToastId} action={action} variant="solid">
            <ToastTitle>{title}</ToastTitle>
            <ToastDescription>
              {description}
            </ToastDescription>
          </Toast>
        );
      },
    });
  };

  return (
    <PopUpContext
      value={{
        showDefaultToast,
      }}>
      {children}
    </PopUpContext>
  );
}
