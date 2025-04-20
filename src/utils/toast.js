import toast from 'react-hot-toast';

export const showToast = {
  success: (message) => {
    toast.success(message, {
      duration: 3000,
      position: 'top-right',
      style: {
        background: '#4CAF50',
        color: '#fff',
        padding: '16px',
        borderRadius: '8px',
      },
    });
  },
  error: (message) => {
    toast.error(message, {
      duration: 4000,
      position: 'top-right',
      style: {
        background: '#F44336',
        color: '#fff',
        padding: '16px',
        borderRadius: '8px',
      },
    });
  },
  loading: (message) => {
    return toast.loading(message, {
      duration: 5000,
      position: 'top-right',
      style: {
        background: '#363636',
        color: '#fff',
        padding: '16px',
        borderRadius: '8px',
      },
    });
  },
  dismiss: (toastId) => {
    toast.dismiss(toastId);
  },
};