import { FC } from 'react';

interface ToastProps {
  title: string;
  message: string;
  type: 'success' | 'error' | 'pending';
}

const Toast: FC<ToastProps> = ({ title, message, type }) => {
  let bgColorClass = '';
  switch (type) {
    case 'success':
      bgColorClass = 'bg-green-500';
      break;
    case 'error':
      bgColorClass = 'bg-red-500';
      break;
    case 'pending':
      bgColorClass = 'bg-yellow-500';
      break;
    default:
      bgColorClass = 'bg-gray-500';
      break;
  }


  console.log(title, 'jfhhf')

  return (
    <div className={`fixed top-0 right-0 m-4 p-4 text-white rounded ${bgColorClass}`}>
      <div className="font-bold">{title}</div>
      <div>{message}</div>
    </div>
  );
};

export default Toast;
