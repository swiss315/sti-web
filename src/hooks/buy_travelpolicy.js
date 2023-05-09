import { useState } from 'react'
import axios from 'axios'
import { API } from '../helper/action'
import { Cookies } from 'react-cookie';

export const useTravelpolicy = () => {
    const [error, setError] = useState(null)
    const [isquoteLoading, setQuoteIsLoading] = useState(null)
    const [gettravelquote, setTravelquote] = useState({})
    const cookies = new Cookies();
        let token = cookies.get('xhrTOKEN')
    
    const travelquote = async ( setModalShow) => {
        setQuoteIsLoading(true)
        setError(null)
        const data ={};
        await axios.post(`${API}/get-travel-quote`, data,
        {
            headers: {
                'Authorization': `Token ${token}`, 
                'Content-Type': 'application/json'
            }
        } ).then((response) => {
            console.log(response.data.data)
            setTravelquote(response.data.data)
            setModalShow(true)
            setQuoteIsLoading(false)
        }).catch((err) => {
            setQuoteIsLoading(false)
            setError(err.response.data.errors)
            console.log(err.response.data.errors)
        })
    }
    
    return { travelquote, isquoteLoading, error, gettravelquote }
}
