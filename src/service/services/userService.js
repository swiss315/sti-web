import {authorizedGateRequest} from "../../helper/axios";
import {GET_AVAILABLE_POLICY, GET_HOSPITAL, GET_LGA, GET_POLICY_TYPE, GET_STATES, TITLES} from "./userRoute";

export const getAvailablePolicy = () => {
    return authorizedGateRequest.get(GET_AVAILABLE_POLICY);
};

export const getPolicyType = (type: string) => {
    return authorizedGateRequest.get(`${GET_POLICY_TYPE}/${type}`);
};

export const getAllTitle = () => {
    return authorizedGateRequest.get(TITLES);
};

export const getAllStates = () => {
    return authorizedGateRequest.get(`${GET_STATES}`);
};

export const getLga = (stateName: string) => {
    return authorizedGateRequest.get(`${GET_LGA}/${stateName}/lgas`);
};

export const getAllHospital = () => {
    return authorizedGateRequest.get(`${GET_HOSPITAL}`);
};
