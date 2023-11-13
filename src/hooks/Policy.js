import {useCallback, useState} from 'react'
import axios from 'axios'
import { API } from '../helper/action'
import { Cookies } from 'react-cookie';

export const usePolicy = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const cookies = new Cookies();
    let token = cookies.get('xhrTOKEN')

    const getPolicies = useCallback(
        async () => {
            setIsLoading(true)
            setError(null)

            // const user = { user : data }

            await axios.get(`${API}/policies`,
                {
                    headers: {
                        'Authorization': `Token ${token}`,
                        'Content-Type': 'application/json'
                    }
                } ).then((response) => {
                console.log(response.data.data)
                setIsLoading(false)
            }).catch((err) => {
                setIsLoading(false)
                setError(err.response.data.errors)
                console.log(err.response.data.errors)
            })
        }, [token]
    )

    return { getPolicies, error, isLoading }
}
