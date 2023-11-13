import { useCallback, useState } from 'react'
import axios from 'axios'
import { API } from '../helper/action'
import { Cookies } from 'react-cookie';

export const useTransaction = () => {
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState([])

    const transaction = useCallback(async () => {
        setIsLoading(true)
        setError(null)

        const cookies = new Cookies();
        let token = cookies.get('xhrTOKEN')

        await axios.get(`${API}/transaction-history`,
        {
            headers: {
                'Authorization': `Token ${token}`, 
                'Content-Type': 'application/json'
            }
        } ).then((response) => {
            // console.log(response.data.history)
            setData(response.data.history)
            setIsLoading(false)
            // return response.data.history
        }).catch((err) => {
            setIsLoading(false)
            setError(err.response.data.message)
            console.log(err.response.data.message)
        })
    }, [])
    
    return { transaction, data, isLoading, error }
}
