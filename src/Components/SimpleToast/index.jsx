import toast from 'react-hot-toast';

export function defaultToast(message) {
    toast(message,{position: 'bottom-right'});
}

export function successToast(message) {
    toast.success(message,{position: 'bottom-right'});
}

export function errorToast(message) {
    toast.error(message,{position: 'bottom-right'});
}