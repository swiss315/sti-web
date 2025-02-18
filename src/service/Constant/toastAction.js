export const SHOW_TOAST = 'SHOW_TOAST';

interface ShowToastAction {
  type: typeof SHOW_TOAST;
  payload: {
    title: string;
    message: string;
    type: 'success' | 'error' | 'pending';
  };
}

export const showToast = (title: string, message: string, type: 'success' | 'error' | 'pending'): ShowToastAction => ({
  type: SHOW_TOAST,
  payload: { title, message, type }
});

export type ToastActionTypes = ShowToastAction;
