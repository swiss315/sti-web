import {createContext, FC, useContext, useState} from "react";
import Toast from "../../components/Notification/Notification";

interface ToastContextType {
  showToast: (title: string, message: string, type: 'success' | 'error' | 'pending') => void;
}

const ToastContext = createContext(undefined);

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

let toastFunction: ToastContextType['showToast'];

export const ToastProvider:FC<{ children: any }> = ({ children }) => {
  const [toast, setToast] = useState(
    null,
  );

  const showToast = (title: string, message: string, type: 'success' | 'error' | 'pending') => {
    setToast({ title, message, type });
    setTimeout(() => {
      setToast(null);
    }, 10000); // Hide toast after 5 seconds
  };

  toastFunction = showToast;

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && <Toast title={toast.title} message={toast.message} type={toast.type} />}
    </ToastContext.Provider>
  );
};

export const triggerToast = () => {
  if (!toastFunction) {
    throw new Error('ToastProvider is not initialized yet.');
  }
  return toastFunction;
};
