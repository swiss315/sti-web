import {buyHealthPolicy, confirmHealthPolicyPayment} from "../service/services/userService";
import {useState} from "react";
import {useToast} from "../service/context/NotificationContext";

export const useBuyHealthPolicy = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [healthPolicy, setHealthPolicy] = useState(null);
    const {showToast} = useToast()
    const buyPolicy = async (payload) => {
        try {
            setIsLoading(true);
            const response = await buyHealthPolicy(payload)
            console.log(response)
            setHealthPolicy(response.data.response)
            setIsLoading(false);
            return true;
        } catch (e) {
            console.log(e)
            const allErrors = e.response?.data?.errors;
            const firstError = allErrors ? Object.values(allErrors).find(error => error) : e.response.data.message;
            setIsLoading(false);
            showToast('Error', firstError, 'error')

            return false;
        }
    }

    const confirmPayment = async (payload) => {
        try {
            setIsLoading(true);
            const response = await confirmHealthPolicyPayment(payload)
            console.log(response)
            setIsLoading(false);
            showToast('Success', response.data.message, 'success')
            return true;
        } catch (e) {
            console.log(e)
            setIsLoading(false);
            showToast('Error', e.response.data.message, 'error')

            return false;
        }
    }
    return {
        isLoading,
        buyPolicy,
        healthPolicy,
        confirmPayment
    }
}
