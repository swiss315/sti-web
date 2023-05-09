import { useState } from 'react'
import axios from 'axios'
import { API } from '../helper/action'
import { Cookies } from 'react-cookie';

export const useRiskPolicy = () => {
    const [error, setError] = useState(null)
    const [isquoteLoading, setQuoteIsLoading] = useState(null)
    const [getriskquote, setgetRiskQuote] = useState({})
    const cookies = new Cookies();
        let token = cookies.get('xhrTOKEN')
    
    const riskquote = async (data, setModalShow) => {
        setQuoteIsLoading(true)
        setError(null)
        await axios.post(`${API}/get-all-risk-quote`, data ,
        {
            headers: {
                'Authorization': `Token ${token}`, 
                'Content-Type': 'application/json'
            }
        } ).then((response) => {
            console.log(response.data.data)
            setgetRiskQuote(response.data.data)
            setModalShow(true)
            setQuoteIsLoading(false)
        }).catch((err) => {
            setQuoteIsLoading(false)
            setError(err.response.data.errors)
            console.log(err.response.data.errors)
        })
    }
    
    return { riskquote, isquoteLoading, error, getriskquote }
}
