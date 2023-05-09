import { useState } from 'react'
import axios from 'axios'
import { API } from '../helper/action'
import { Cookies } from 'react-cookie';

export const useMarinepolicy = () => {
    const [error, setError] = useState(null)
    const [isquoteLoading, setQuoteIsLoading] = useState(null)
    const [getmarinequote, setMarinequote] = useState({})
    const cookies = new Cookies();
        let token = cookies.get('xhrTOKEN')
    
    const marinequote = async (data, setModalShow) => {
        setQuoteIsLoading(true)
        setError(null)
        await axios.post(`${API}/get-marine-quote`, data ,
        {
            headers: {
                'Authorization': `Token ${token}`, 
                'Content-Type': 'application/json'
            }
        } ).then((response) => {
            console.log(response.data.data)
            setMarinequote(response.data.data)
            setModalShow(true)
            setQuoteIsLoading(false)
        }).catch((err) => {
            setQuoteIsLoading(false)
            setError(err.response.data.errors)
            console.log(err.response.data.errors)
        })
    }
    
    return { marinequote, isquoteLoading, error, getmarinequote }
}
