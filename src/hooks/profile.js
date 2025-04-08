import { useCallback, useState } from 'react'
import {getUserProfile, putUpdateUserProfile} from "../service/services/authServices";
import {useDispatch} from "react-redux";
import {handleSaveUserData} from "../service/Constant/action.ts";
import {useToast} from "../service/context/NotificationContext";

export const useProfile = () => {
    const [error] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const [data] = useState({})
    const dispatch = useDispatch()
    const {showToast} = useToast();

    const profile = useCallback(async () => {
        try {
            const response = await getUserProfile();
            console.log(response)
            if (response.data.status) {
                dispatch(handleSaveUserData(response?.data?.response))
                return response
            }
        } catch (e) {
            console.log(e)
            return e
        }




    }, [dispatch])

    const updateProfile = useCallback(async (profiledata, setShow) => {
        setIsLoading(true)
        try {
            const response = await putUpdateUserProfile(profiledata);
            console.log(response)
            if (response.data.success) {
                setIsLoading(false)
                dispatch(handleSaveUserData(response?.data?.response))
                showToast('Success', response.data.message, 'success');
                return true
            }
        } catch (e) {
            setIsLoading(false)
            console.log(e)
            showToast('Error', e.response.data.message, 'error');
            return false
        }
    }, [])

    return { profile, updateProfile, data, isLoading, error }
}
