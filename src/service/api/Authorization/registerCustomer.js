import {NavigateFunction} from 'react-router-dom';
import {postRegister, postVerifyOtp} from "../../services/authServices.js";
import type {Register, VerifyOtpCode} from "../../Constant/serviceType";

export const registerCustomer = async (payload: Register, navigate: NavigateFunction) => {
    let userResponse = null;
    try {
        console.log(payload)
        const response = await postRegister(payload);
        console.log('register', response, response?.data?.response?.customer);
        userResponse = response?.data?.response?.customer;
        if (userResponse) {
            const {token} = userResponse

            const access_token = token;
            navigate('/verify-otp');
            return {success: true, token: access_token, user: userResponse};
        }
    } catch (e) {
        console.log(e);
        return {success: false, error: e?.response?.data?.message};
    }

    return userResponse;
};

export const postVerifyOtpRequest = async (payload: VerifyOtpCode, navigate: NavigateFunction) => {
    let userResponse = null;
    try {
        console.log(payload)
        const response = await postVerifyOtp(payload);
        console.log('verify', response);
        userResponse = response?.data?.response;
        if (userResponse) {
            const {token} = userResponse

            const access_token = token;
            navigate('/login');
            return {success: true, token: access_token, user: userResponse};
        }
    } catch (e) {
        console.log(e);
        return {success: false, error: e?.response?.data?.message};
    }

    return userResponse;
};
