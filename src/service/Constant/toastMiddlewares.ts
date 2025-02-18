import { SHOW_TOAST } from './toastAction';
import {triggerToast} from "../context/NotificationContext";

const toastMiddleware = () => (next: any) => (action: any) => {
  if (action.type === SHOW_TOAST) {
    const { title, message, type } = action.payload;
    triggerToast()(title, message, type);
  }

  return next(action);
};

export default toastMiddleware;
