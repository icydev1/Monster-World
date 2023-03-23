
import {  toast } from 'react-toastify';

export const showToastMessage = (type,text) => {

    switch (type) {
        case 'success':
            toast.success(text, {
                position: toast.POSITION.TOP_RIGHT
            });
            break;

        case 'error':
            toast.error(text, {
                position: toast.POSITION.TOP_RIGHT
            });
            break;

        case 'warning':
            toast.warning(text, {
                position: toast.POSITION.TOP_RIGHT
            });
            break;

        case 'info':
            toast.info(text, {
                position: toast.POSITION.TOP_RIGHT
            });
            break;

        default:
            toast(text, {
                position: toast.POSITION.TOP_RIGHT
            });
            break;
    }




    // toast('Default Notification !', {
    //     position: toast.POSITION.BOTTOM_LEFT
    // });
    // toast('Custom Style Notification with css class!', {
    //      position: toast.POSITION.BOTTOM_RIGHT,
    // className: 'foo-bar'
    // });


};