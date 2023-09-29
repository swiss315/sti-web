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
    const maxAge = 1 * 2 * 60 * 60

    const login = async (data) => {
        setIsLoading(true)
        setError(null)

        const user = { user : data }

        await axios.post(`${API}/users/login`, user ,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        } ).then((response) => {
            console.log(response.data)
            let user = response.data.user
            let userinfo = {
                wallet: response.data.wallet_balance,
                is_agent: response.data.is_agent
            }
            let policy = response.data.policy_data
            let token = response.data.user.token
            user = btoa(JSON.stringify(user))
            userinfo = btoa(JSON.stringify(userinfo))
            policy = btoa(JSON.stringify(policy))
            setIsLoading(false)
            cookies.set("xhrTOKEN" , token, { path: '/', maxAge: maxAge, sameSite: 'lax', secure: true })
            cookies.set("policy" , policy, { path: '/', maxAge: maxAge, sameSite: 'lax', secure: true })
            cookies.set("user" , user, { path: '/', maxAge: maxAge, sameSite: 'lax', secure: true })
            cookies.set("userinfo" , userinfo, { path: '/', maxAge: maxAge, sameSite: 'lax', secure: true })
            dispatch({type : 'LOGIN' ,  token: token})
            Navigate('/dashboard')
        }).catch((err) => {
            setIsLoading(false)
            setError(err.response.data.errors)
            console.log(err.response.data.errors)
        })
    }
    
    return { login, isLoading, error }
}
