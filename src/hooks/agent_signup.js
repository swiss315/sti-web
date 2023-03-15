import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { API } from '../helper/action'

export const useAgent_Signup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    
    let Navigate = useNavigate()

    const agentsignup = async (data) => {
        setIsLoading(true)
        setError(null)

        await axios.post(`${API}/register`, data ,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        } ).then((response) => {
            console.log(response)
                setIsLoading(false)
                Navigate('/login')
            
        }).catch((err) => {
            setIsLoading(false)
            setError(err.response.data.errors)
            console.log(err.response)
        })
    }
    
    return { agentsignup, isLoading, error }
}
