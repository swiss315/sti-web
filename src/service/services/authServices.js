import { unauthorizedGateRequest} from "../../helper/axios";
import type {Login} from "../Constant/serviceType";
import {LOGIN, REGISTER, VERIFY_OTP} from "./authRoute";
import {Register} from "../Constant/serviceType";

export const postLogin = (payload: Login) => {
    return unauthorizedGateRequest.post(LOGIN, payload);
};

export const postRegister = (payload: Register) => {
    return unauthorizedGateRequest.post(REGISTER, payload);
};

export const postVerifyOtp = (payload: Register) => {
    return unauthorizedGateRequest.post(VERIFY_OTP, payload);
};

