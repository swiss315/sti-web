import { useState } from 'react'
import axios from 'axios'
import { API } from '../helper/action'
import { Cookies } from 'react-cookie';

export const useClaim = () => {
    const [error, setError] = useState(null)
    const [isquoteLoading, setQuoteIsLoading] = useState(null)
    const [getclaim, setGetclaim] = useState({})
    const cookies = new Cookies();
        let token = cookies.get('xhrTOKEN')
    
    const claim = async (data, setModalShow) => {
        setQuoteIsLoading(true)
        setError(null)
        await axios.post(`${API}/make-claim`, data ,
        {
            headers: {
                'Authorization': `Token ${token}`, 
                'Content-Type': 'application/json'
            }
        } ).then((response) => {
            console.log(response.data.data)
            setGetclaim(response.data.data)
            setModalShow(true)
            setQuoteIsLoading(false)
        }).catch((err) => {
            setQuoteIsLoading(false)
            setError(err.response.data.errors)
            console.log(err.response.data.errors)
        })
    }

    const trackclaim = async (data, setModalShow) => {
        setQuoteIsLoading(true)
        setError(null)
        await axios.post(`${API}/track-claim`, data ,
        {
            headers: {
                'Authorization': `Token ${token}`, 
                'Content-Type': 'application/json'
            }
        } ).then((response) => {
            console.log(response.data.data)
            // setGetclaim(response.data.data)
            setModalShow(true)
            setQuoteIsLoading(false)
        }).catch((err) => {
            setQuoteIsLoading(false)
            setError(err.response.data.errors)
            console.log(err.response.data.errors)
        })
    }
    
    return { claim, isquoteLoading, error, trackclaim, getclaim }
}
