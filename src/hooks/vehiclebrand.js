import { useCallback, useState } from 'react'
import axios from 'axios'
import { API } from '../helper/action'
import { Cookies } from 'react-cookie';

export const useVechicleBrand = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const [vehicles, setVehicles] = useState([])
    const [brandtype, setBrandtype] = useState([])

    const vehiclebrand = useCallback(async () => {
        setIsLoading(true)
        setError(null)

        const cookies = new Cookies();
        let token = cookies.get('xhrTOKEN')

        await axios.get(`${API}/vehicle-brands`,
        {
            headers: {
                'Authorization': `Token ${token}`, 
                'Content-Type': 'application/json'
            }
        } ).then((response) => {
            setVehicles(response.data.data)
            setIsLoading(false)
        }).catch((err) => {
            setIsLoading(false)
            setError(err)
            console.log(err)
        })
    }, [])

    const brandtypes = useCallback(async (id) => {
        setIsLoading(true)
        setError(null)

        const cookies = new Cookies();
        let token = cookies.get('xhrTOKEN')

        await axios.get(`${API}/vehicle-brand-types/${id}`,
        {
            headers: {
                'Authorization': `Token ${token}`, 
                'Content-Type': 'application/json'
            }
        } ).then((response) => {
            setIsLoading(false)
            setBrandtype(response.data.data)
        }).catch((err) => {
            setIsLoading(false)
            setError(err)
            console.log(err)
        })
    }, [])
    
    return { brandtypes, vehiclebrand, isLoading, error, vehicles, brandtype }
}
