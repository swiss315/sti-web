import { useState } from 'react'
import axios from 'axios'
import { API } from '../helper/action'
import { Cookies } from 'react-cookie';

export const useBuyvehiclepolicy = () => {
    const [error, setError] = useState(null)
    const [isquoteLoading, setQuoteIsLoading] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const [getvehiclequote, setVehiclequote] = useState({})
    const cookies = new Cookies();
    let token = cookies.get('xhrTOKEN')
    
    const vehiclequote = async (data, setModalShow) => {
        setQuoteIsLoading(true)
        setError(null)

        // const user = { user : data }

        await axios.post(`${API}/get-vehicle-quote`, data ,
        {
            headers: {
                'Authorization': `Token ${token}`, 
                'Content-Type': 'application/json'
            }
        } ).then((response) => {
            console.log(response.data.data)
            setVehiclequote(response.data.data)
            setModalShow(true)
            setQuoteIsLoading(false)
        }).catch((err) => {
            setQuoteIsLoading(false)
            setError(err.response.data.errors)
            console.log(err.response.data.errors)
        })
    }

    const buyVehicle = async (individualdata, vehicledata) => {
        setIsLoading(true)
        setError(null)
        let userdata = cookies.get("user");
        userdata = JSON.parse(atob(userdata));

        const data = {
            persona : individualdata,
            vehicle : [vehicledata],
            "quote_price": getvehiclequote.price,
            "pin":"7038",
            "payment_source":"paystack",
            "user_id": userdata.id
        }

        await axios.post(`${API}/buy-vehicle-policy`, data ,
            {
                headers: {
                    'Authorization': `Token ${token}`,
                    'Content-Type': 'application/json'
                }
            } ).then((response) => {
            console.log(response.data.data)
            setIsLoading(false)
        }).catch((err) => {
            setQuoteIsLoading(false)
            setError(err.response.data.errors)
            console.log(err.response.data.errors)
        })
    }

    return { vehiclequote, isquoteLoading, error, getvehiclequote, buyVehicle, isLoading }
}
