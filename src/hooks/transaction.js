import {useState } from 'react'
import { getTransactions} from "../service/services/userService";

export const useTransaction = () => {
    const [error] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState([])

    const getAllTransactions = async () => {
        try {
            setIsLoading(true)
            const response = await getTransactions()
            console.log(response)
            if (response.data.success) {
                setData(response.data.response)
                setIsLoading(false)
                return true
            }
        } catch (e) {
            console.log(e)
            setIsLoading(false)
            return false
        }
    }
    return {getAllTransactions, data, isLoading, error }
}
