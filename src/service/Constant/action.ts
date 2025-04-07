import {createAction} from '@reduxjs/toolkit';
import {NavigateFunction} from "react-router-dom";
import {Login, Register, VerifyOtpCode} from "./serviceType";

export const handleRegisterRequest = createAction<{
    payload: Register,
    navigate: NavigateFunction
}>('REGISTER_REQUEST');
export const handleVerifyOtpRequest = createAction<{
    payload: VerifyOtpCode,
    navigate: NavigateFunction
}>('VERIFY_OTP_REQUEST');
export const handleLogoutRequest = createAction('REQUEST_LOGOUT');
export const handleLogout = createAction('LOGOUT');
export const handleLoginRequest = createAction<{
    payload: Login,
    navigate: NavigateFunction
}>('LOGIN_REQUEST');

export const handleSaveUserData = createAction('SAVE_USER_DATA');

export const handleLoginFailure = createAction<string>('LOGIN_FAILURE');
export const handleRegisterSuccess = createAction<{ token: string }>('REGISTER_SUCCESS');
export const handleSuccess = createAction('SUCCESS');
export const handleFailure = createAction('FAILURE');

export const handleLoginSuccess = createAction<{ token: string, email: string }>('LOGIN_SUCCESS');
