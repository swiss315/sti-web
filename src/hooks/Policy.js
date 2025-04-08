import {useCallback, useState} from 'react'
import axios from 'axios'
import { API } from '../helper/action'
import { Cookies } from 'react-cookie';
import {getAllRiskPolicies, getTravelPolicies, healthPolicy, motorPolicy} from "../service/services/userService";

export const usePolicy = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const [policy, setPolicy] = useState({
        health: [],
        motor: [],
        allRisk: [],
        travel: [],
    })
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

    const getMotorPolicy = async () => {
        try {
            setIsLoading(true)
            const response = await motorPolicy()
            console.log(response)
            if (response.data.success) {
                setPolicy((prev) => ({...prev, motor: response.data.response}))
                setIsLoading(false)
                return true
            }
        } catch (e) {
            console.log(e)
            setIsLoading(false)
            return false
        }
    }

    const getHealthPolicy = async (type: string) => {
        try {
            setIsLoading(true)
            const response = await healthPolicy(type)
            console.log(response)
            if (response.data.success) {
                setPolicy((prev) => ({...prev, health: response.data.response}))
                setIsLoading(false)
                return true
            }
        } catch (e) {
            console.log(e)
            setIsLoading(false)

            return false
        }
    }

    const getAllRiskPolicy = async () => {
        try {
            setIsLoading(true)
            const response = await getAllRiskPolicies()
            console.log(response)
            if (response.data.success) {
                setPolicy((prev) => ({...prev, allRisk: response.data.response}))
                setIsLoading(false)
                return true
            }
        } catch (e) {
            console.log(e)
            setIsLoading(false)
            return false
        }
    }

    const getTravelPolicy = async () => {
        try {
            setIsLoading(true)
            const response = await getTravelPolicies()
            console.log(response)
            if (response.data.success) {
                setPolicy((prev) => ({...prev, travel: response.data.response}))
                setIsLoading(false)
                return true
            }
        } catch (e) {
            console.log(e)
            setIsLoading(false)
            return false
        }
    }


    return { getPolicies, error, isLoading, getHealthPolicy, getMotorPolicy, policy, getTravelPolicy, getAllRiskPolicy  }
}
