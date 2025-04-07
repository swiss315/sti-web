import { useState } from 'react'
import axios from 'axios'
import { API } from '../helper/action'
import { Cookies } from 'react-cookie';
import {buyTravelPolicy, buyVehiclePolicy} from "../service/services/userService";
import {useToast} from "../service/context/NotificationContext";
import {BUY_TRAVEL_POLICY} from "../service/services/userRoute";

export const useTravelpolicy = () => {
    const [error, setError] = useState(null)
    const [isQuoteLoading, setQuoteIsLoading] = useState(null)
    const [gettravelquote, setTravelquote] = useState({})
    const {showToast} = useToast()

    const buyPolicy = async (payload) => {
        try {
            setQuoteIsLoading(true);
            const response = await buyTravelPolicy(payload)
            console.log(response)
            // setVehicleQuote(response.data.response.vehicle_quote)
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

    return {buyPolicy, isQuoteLoading, error, gettravelquote }
}
