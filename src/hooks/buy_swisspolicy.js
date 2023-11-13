import { useState } from 'react'
import axios from 'axios'
import { API } from '../helper/action'
import { Cookies } from 'react-cookie';

export const useSwisspolicy = () => {
    const [error, setError] = useState(null)
    const [isquoteLoading, setQuoteIsLoading] = useState(null)
    const [getswissquote, setSwissquote] = useState({})
    const [isLoading, setIsLoading] =  useState(false)
    const cookies = new Cookies();
        let token = cookies.get('xhrTOKEN')
    
    const swissquote = async (data, setModalShow) => {
        setQuoteIsLoading(true)
        setError(null)

        // const user = { user : data }

        await axios.post(`${API}/get-swiss-quote`, data ,
        {
            headers: {
                'Authorization': `Token ${token}`, 
                'Content-Type': 'application/json'
            }
        } ).then((response) => {
            console.log(response.data.data)
            setSwissquote(response.data.data)
            setModalShow(true)
            setQuoteIsLoading(false)
        }).catch((err) => {
            setQuoteIsLoading(false)
            setError(err.response.data.errors)
            console.log(err.response.data.errors)
        })
    }

    const buySwissPolicy = async (individualdata, swissdata) => {
        setIsLoading(true)
        setError(null)
        let userdata = cookies.get("user");
        userdata = JSON.parse(atob(userdata));

        const data = {
            persona : individualdata,
            swiss : [swissdata],
            "quote_price": getswissquote.price,
            "pin":"7038",
            "payment_source":"paystack",
            "user_id": userdata.id
        }

        await axios.post(`${API}/buy-swiss-policy`, data ,
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
    
    return { swissquote, isquoteLoading, error, getswissquote, buySwissPolicy, isLoading }
}
