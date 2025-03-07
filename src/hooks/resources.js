import {useState} from "react";
import {
    getAllHospital, getAllId,
    getAllStates,
    getAllTitle, getAllVehicleClass, getAllVehicleMake, getAllVehicleModel, getAllVehicleUsage,
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
        policyType: [],
        hospital: [],
        vehicleClass: [],
        vehicleModel: [],
        vehicleMake: [],
        vehicleUsage: [],
        ID: [],

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
            console.log(response.data, 'policy')
            if (response.status === 200) {
                setData((prev) => ({...prev, policyType: response.data}))

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

    const getIdTypes = async () => {
        try {
            setLoading(true)
            const response = await getAllId()
            console.log(response)
            if (response.data.success) {
                setData((prev) => ({...prev, ID: response.data.response}))
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

                return response.data.response
            }
        } catch (e) {
            console.log(e)
            return false
        }
    }

    const getHospital = async (data) => {
        try {
            setLoading(true)
            const response = await getAllHospital(data)
            console.log(response)
            if (response.data.success) {
                setData((prev) => ({...prev, hospital: response.data.response}))
                return true
            }
        } catch (e) {
            console.log(e)
            return false
        }
    }

    const getVehicleMakes = async () => {
        try {
            setLoading(true)
            const response = await getAllVehicleMake()
            console.log(response)
            if (response.data.success) {
                setData((prev) => ({...prev, vehicleMake: response.data.response}))
                return true
            }
        } catch (e) {
            console.log(e)
            return false
        }
    }

    const getVehicleModel = async (id) => {
        try {
            setLoading(true)
            const response = await getAllVehicleModel(id)
            console.log(response)
            if (response.data.success) {
                setData((prev) => ({...prev, vehicleModel: response.data.response}))
                return true
            }
        } catch (e) {
            console.log(e)
            return false
        }
    }

    const getVehicleUsages = async () => {
        try {
            setLoading(true)
            const response = await getAllVehicleUsage()
            console.log(response)
            if (response.data.success) {
                setData((prev) => ({...prev, vehicleUsage: response.data.response}))
                return true
            }
        } catch (e) {
            console.log(e)
            return false
        }
    }

    const getVehicleClass = async () => {
        try {
            setLoading(true)
            const response = await getAllVehicleClass()
            console.log(response)
            if (response.data.success) {
                setData((prev) => ({...prev, vehicleClass: response.data.response}))
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
        getVehicleClass,
        getVehicleMakes,
        getVehicleModel,
        getVehicleUsages,
        getIdTypes
    }
}
