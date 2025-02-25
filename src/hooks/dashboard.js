import {getUserDashboard} from "../service/services/authServices";
import {useCallback, useState} from "react";

export const useDashboard = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        insurance_policies: [],
        transactions: []
    })
    const getDashboard = useCallback(async () => {
        try {
            setLoading(true);
            const response = await getUserDashboard();
            console.log(response)
            if(response.data.success){
                setLoading(false);
                setData(response.data.response)
                return response
            }
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }, [])
    return {
        getDashboard,
        loading,
        data
    }
}
