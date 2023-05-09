import { useState } from 'react'
import axios from 'axios'
import { API } from '../helper/action'
import { Cookies } from 'react-cookie';

export const useChangepassword = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const cookies = new Cookies();
        let token = cookies.get('xhrTOKEN')
    
    const changepassword = async (data) => {
        setIsLoading(true)
        setError(null)

        const user = { user : data }

        await axios.post(`${API}/change-password`, user ,
        {
            headers: {
                'Authorization': `Token ${token}`, 
                'Content-Type': 'application/json'
            }
        } ).then((response) => {
            console.log(response)
            setIsLoading(false)
        }).catch((err) => {
            setIsLoading(false)
            setError(err.response.data.errors)
            console.log(err.response.data.errors)
        })
    }
    
    return { changepassword, isLoading, error }
}
