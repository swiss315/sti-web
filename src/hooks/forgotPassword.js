import {postForgotPassword, postResetPassword, postUpdateResetPassword} from "../service/services/authServices";
import {useToast} from "../service/context/NotificationContext";

export const useForgotPassword = () => {
const {showToast} = useToast()
    const requestForgotPassword = async (data) => {
        try {
            const response = await postForgotPassword(data);
            console.log(response)
            if (response.data.success) {
                return true
            } else {
                return false
            }
        } catch (e) {
            console.log(e)
            showToast('Error', e.response.data.response, 'error')
            return false
        }
    }

    const requestPostResetPassword = async (data) => {
        try {
            const response = await postResetPassword(data);
            console.log(response)
            return !!response.data.success;
        } catch (e) {
            console.log(e)
            showToast('Error', e.response.data.response, 'error')
            return false
        }
    }

    const requestUpdatePassword = async (data) => {
        try {
            const response = await postUpdateResetPassword(data);
            console.log(response)

            if (response.data.success) {
                showToast('Success', response.data.message, 'success')
            }
            return !!response.data.success;
        } catch (e) {
            console.log(e)
            showToast('Error', e.response.data.response, 'error')
            return false
        }
    }

    return {
        requestForgotPassword,
        requestPostResetPassword,
        requestUpdatePassword,
    }
}
