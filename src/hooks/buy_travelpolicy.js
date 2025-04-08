import { useState } from 'react'
import {
    buyTravelPolicy, confirmTravelPolicyPayment,
    initializePayment
} from "../service/services/userService";
import {useToast} from "../service/context/NotificationContext";

export const useTravelpolicy = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error] = useState(null)
    const [isQuoteLoading, setQuoteIsLoading] = useState(null)
    const [getTravelQuote, setTravelQuote] = useState({})
    const {showToast} = useToast()

    const buyPolicy = async (payload) => {
        try {
            setQuoteIsLoading(true);
            const response = await buyTravelPolicy(payload)
            console.log(response)
            setTravelQuote(response.data.response.travel_quote)
            setQuoteIsLoading(false);
            return true;
        } catch (e) {
            console.log(e)
            const allErrors = e.response?.data?.errors;
            const firstError = allErrors ? Object.values(allErrors).find(error => error) : e.response.data.message;
            setQuoteIsLoading(false);
            showToast('Error', firstError, 'error')

            return false;
        }
    }

    const postInitializePayment = async (payload) => {
        try {
            setIsLoading(true);
            const response = await initializePayment('travel', payload)
            console.log(response)
            setIsLoading(false);
            return {success: true, data: response.data.response};
        } catch (e) {
            console.log(e)
            const allErrors = e.response?.data?.errors;
            const firstError = allErrors ? Object.values(allErrors).find(error => error) : e.response.data.message;
            setIsLoading(false);
            showToast('Error', firstError, 'error')

            return {success: false, error: 'this is wrong'};
        }
    }

    const confirmPayment = async (payload) => {
        try {
            setIsLoading(true);
            const response = await confirmTravelPolicyPayment(payload)
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

    return {buyPolicy, isQuoteLoading, error, getTravelQuote, postInitializePayment, isLoading, confirmPayment }
}
