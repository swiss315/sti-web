import { useState } from 'react'
import {
    buyVehiclePolicy,
    confirmVehiclePolicyPayment, getVehicleDetailAutoReg, initializePayment
} from "../service/services/userService";
import {useToast} from "../service/context/NotificationContext";

export const useBuyvehiclepolicy = () => {
    const [error] = useState(null)
    const [isquoteLoading, setQuoteIsLoading] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const [vehicleDetails, setVehicleDetails] = useState({})
    const [vehicleQuote, setVehicleQuote] = useState({})
    const {showToast} = useToast()

    const getVehicleDetails = async (payload) => {
        try {
            setIsLoading(true);
            const response = await getVehicleDetailAutoReg(payload)
            console.log(response)
            setVehicleDetails(response.data.response)
            setIsLoading(false);
            return {success: true, data: response.data.response.data};
        } catch (e) {
            console.log(e)
            const allErrors = e.response?.data?.errors;
            const firstError = allErrors ? Object.values(allErrors).find(error => error) : e.response.data.message;
            setIsLoading(false);
            showToast('Error', firstError, 'error')

            return {success: false, error: firstError}
        }
    }

    const buyPolicy = async (payload) => {
        try {
            setQuoteIsLoading(true);
            const response = await buyVehiclePolicy(payload)
            console.log(response)
            setVehicleQuote(response.data.response.vehicle_quote)
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
            const response = await initializePayment('vehicle', payload)
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
            const response = await confirmVehiclePolicyPayment(payload)
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

    return { isquoteLoading, getVehicleDetails, vehicleDetails, error, vehicleQuote, buyPolicy, isLoading, confirmPayment,
        postInitializePayment }
}
