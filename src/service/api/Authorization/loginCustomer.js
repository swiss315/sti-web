import {NavigateFunction} from 'react-router-dom';
import {postLogin} from "../../services/authServices.js";
import type {Login} from "../../Constant/serviceType";

export const loginUser = async (payload: Login, navigate: NavigateFunction) => {
    let userResponse = null;
    try {
        console.log(payload)
        const response = await postLogin(payload);
        console.log('login', response);
        userResponse = response?.data?.response?.customer;
        if (userResponse) {
            console.log(navigate);
            const {token} = userResponse
            const access_token = token;
            navigate('/dashboard');

            return {success: true, data: access_token, user: userResponse};
        }
    } catch (e) {
        console.log(e);
        return {success: false, error: e?.response?.data?.message};
    }

    return userResponse;
};
