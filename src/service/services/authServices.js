import {authorizedGateRequest, unauthorizedGateRequest} from "../../helper/axios";
import type {Login} from "../Constant/serviceType";
import {
    DASHBOARD,
    FORGOT_PASSWORD,
    LOGIN,
    PROFILE,
    REGISTER,
    RESET_PASSWORD,
    UPDATE_PASSWORD, UPDATE_PROFILE, UPDATE_RESET_PASSWORD,
    VERIFY_OTP
} from "./authRoute";
import {
    ForgotPassword,
    Register,
    ResetPassword,
    UpdatePassword,
    UpdateResetPassword,
    UpdateUserProfile
} from "../Constant/serviceType";

export const postLogin = (payload: Login) => {
    return unauthorizedGateRequest.post(LOGIN, payload);
};

export const postRegister = (payload: Register) => {
    return unauthorizedGateRequest.post(REGISTER, payload);
};

export const postVerifyOtp = (payload: Register) => {
    return unauthorizedGateRequest.post(VERIFY_OTP, payload);
};

export const postForgotPassword = (payload: ForgotPassword) => {
    return unauthorizedGateRequest.post(FORGOT_PASSWORD, payload);
};

export const postResetPassword = (payload: ResetPassword) => {
    return unauthorizedGateRequest.post(RESET_PASSWORD, payload);
};

export const postUpdateResetPassword = (payload: UpdateResetPassword) => {
    return unauthorizedGateRequest.post(UPDATE_RESET_PASSWORD, payload);
};

export const getUserDashboard = () => {
    return authorizedGateRequest.get(DASHBOARD);
};

export const getUserProfile = () => {
    return authorizedGateRequest.get(PROFILE);
};

export const putUpdateUserProfile = (payload: UpdateUserProfile) => {
    return authorizedGateRequest.put(UPDATE_PROFILE, payload);
};

export const putUpdatePassword = (payload: UpdatePassword) => {
    return authorizedGateRequest.put(UPDATE_PASSWORD, payload);
};
