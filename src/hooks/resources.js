import {useState} from "react";
import {
    getAllHospital,
    getAllStates,
    getAllTitle,
    getAvailablePolicy,
    getLga,
    getPolicyType
} from "../service/services/userService";

export const useResources = () => {
    const [loading, setLoading] = useState()
    const [data, setData] = useState({
        titles: [],
        states: [],
        lgas: [],
        availablePolicy: [],
        policyType: []
    })
    const getAllPolicy = async () => {
        try {
            setLoading(true)
            const response = await getAvailablePolicy()
            console.log(response)
            if( response.data.success) {
                setData((prev) => ({...prev, availablePolicy: response.data.response}))

                return true
            }
        } catch (e) {
            console.log(e)
            return false
        }
    }

    const getInsurancePolicyType = async (type: string) => {
        try {
            setLoading(true)
            const response = await getPolicyType(type)
            console.log(response)
            if (response.data.success) {
                setData((prev) => ({...prev, policyType: response.data.response}))

                return true
            }
        } catch (e) {
            console.log(e)
            return false
        }
    }

    const getTitles = async () => {
        try {
            setLoading(true)
            const response = await getAllTitle()
            console.log(response)
            if (response.data.success) {
                setData((prev) => ({...prev, titles: response.data.response}))
                return true
            }
        } catch (e) {
            console.log(e)
            return false
        }
    }

    const getStates = async () => {
        try {
            setLoading(true)
            const response = await getAllStates()
            console.log(response)
            if (response.data.success) {
                setData((prev) => ({...prev, states: response.data.response}))
                return true
            }
        } catch (e) {
            console.log(e)
            return false
        }
    }

    const getStateLgas = async (stateName: string) => {
        try {
            setLoading(true)
            const response = await getLga(stateName)
            console.log(response)
            if (response.data.success) {
                setData((prev) => ({...prev, lgas: response.data.response}))

                return true
            }
        } catch (e) {
            console.log(e)
            return false
        }
    }

    const getHospital = async () => {
        try {
            setLoading(true)
            const response = await getAllHospital()
            console.log(response)
            if (response.data.success) {
                // setData((prev) => ({...prev, states: response.data.response}))
                return true
            }
        } catch (e) {
            console.log(e)
            return false
        }
    }

    return {
        getAllPolicy,
        loading,
        getInsurancePolicyType,
        getStateLgas,
        getStates,
        getTitles,
        data,
        getHospital,

    }
}
