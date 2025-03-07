import { useState } from 'react'
import axios from 'axios'
import { API } from '../helper/action'
import { Cookies } from 'react-cookie';
import {buyHealthPolicy, buyVehiclePolicy, confirmHealthPolicyPayment} from "../service/services/userService";
import {useToast} from "../service/context/NotificationContext";

export const useBuyvehiclepolicy = () => {
    const [error, setError] = useState(null)
    const [isquoteLoading, setQuoteIsLoading] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const [getvehiclequote, setVehiclequote] = useState({})
    const {showToast} = useToast()

    const buyPolicy = async (payload) => {
        try {
            setIsLoading(true);
            const response = await buyVehiclePolicy(payload)
            console.log(response)
            // setHealthPolicy(response.data.response)
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

    return { isquoteLoading, error, getvehiclequote, buyPolicy, isLoading }
}
