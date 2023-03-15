import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { API } from '../helper/action'
import { useAuthContext } from './context'
import { Cookies } from 'react-cookie';

export const useAgent_Login = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const cookies = new Cookies();
    const { dispatch } = useAuthContext()
    
    let Navigate = useNavigate()
    const maxAge = 1 * 24 * 60 * 60

    const login = async (data) => {
        setIsLoading(true)
        setError(null)

        await axios.post(`${API}/login`, data ,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        } ).then((response) => {
            // console.log(response.data.data.token)
            let user = response.data.data
            user = btoa(JSON.stringify(user))
            setIsLoading(false)
            let token = response.data.data.token
            cookies.set("xhrTOKEN" , token, { path: '/', maxAge: maxAge, sameSite: 'lax', secure: true })
            cookies.set("user" , user, { path: '/', maxAge: maxAge, sameSite: 'lax', secure: true })
            dispatch({type : 'LOGIN' ,  token: token})
            Navigate('/dashboard')
        }).catch((err) => {
            setIsLoading(false)
            setError(err.response.data.message)
            console.log(err.response.data.message)
        })
    }
    
    return { login, isLoading, error }
}
