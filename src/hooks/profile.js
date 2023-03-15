import { useCallback, useState } from 'react'
import axios from 'axios'
import { API } from '../helper/action'
import { Cookies } from 'react-cookie';

export const useProfile = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const [data, setData] = useState({})
    const maxAge = 1 * 24 * 60 * 60

    const profile = useCallback(async () => {
        setIsLoading(true)
        setError(null)

        const cookies = new Cookies();
        let token = cookies.get('xhrTOKEN')

        await axios.get(`${API}/profile`,
        {
            headers: {
                'Authorization': `Bearer ${token}`, 
                'Content-Type': 'application/json'
            }
        } ).then((response) => {
            console.log(response.data.data)
            setIsLoading(false)
            setData(response.data.data)
            let user = response.data.data
            user = btoa(JSON.stringify(user))
            cookies.set("user", user, { path: '/', maxAge: maxAge, sameSite: 'lax', secure: true });
        }).catch((err) => {
            setIsLoading(false)
            setError(err.response.data.message)
            console.log(err.response.data.message)
        })
    }, [maxAge])

    const updateprofile = useCallback(async (profiledata, setShow) => {
        setIsLoading(true)
        setError(null)

        const cookies = new Cookies();
        let token = cookies.get('xhrTOKEN')

        await axios.post(`${API}/profile`, profiledata,
        {
            headers: {
                'Authorization': `Bearer ${token}`, 
                'Content-Type': 'application/json'
            }
        } ).then((response) => {
            setIsLoading(false)
            let user = response.data.data
            user = btoa(JSON.stringify(user))
            cookies.set("user", user, { path: '/', maxAge: maxAge, sameSite: 'lax', secure: true });
            setShow(false)
        }).catch((err) => {
            setIsLoading(false)
            setError(err.response.data.message)
            console.log(err.response.data.message)
        })
    }, [maxAge])
    
    return { profile, updateprofile, data, isLoading, error }
}
