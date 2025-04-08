import { useState } from 'react'
import {useToast} from "../service/context/NotificationContext";
import {initializePayment, postAllRiskQuotes, postConfirmAllRiskPayment} from "../service/services/userService";

export const useRiskPolicy = () => {
    const [error, setError] = useState(null)
    const [isQuoteLoading, setQuoteIsLoading] = useState(null)
    const [riskQuote, setRiskQuote] = useState({})
    const [isLoading, setIsLoading] = useState(null)
    const {showToast} = useToast()

    const getAllRiskQuote = async (payload) => {
        try {
            setQuoteIsLoading(true);
            const response = await postAllRiskQuotes(payload)
            console.log(response)
            setRiskQuote(response.data.response.all_risk_quote)
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
            const response = await initializePayment('all_risk', payload)
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
            const response = await postConfirmAllRiskPayment(payload)
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

    return {getAllRiskQuote, isQuoteLoading, error, riskQuote, confirmPayment, postInitializePayment, isLoading }
}
