import {authorizedGateRequest} from "../../helper/axios";
import {
    ALL_HEALTH_POLICY,
    ALL_TRANSACTIONS,
    ALL_VEHICLE_POLICY,
    BUY_HEALTH_POLICY,
    BUY_VEHICLE_POLICY,
    CONFIRM_HEALTH_POLICY_PAYMENT,
    GET_AVAILABLE_POLICY,
    GET_HOSPITAL, GET_ID,
    GET_LGA,
    GET_POLICY_TYPE,
    GET_STATES,
    GET_VEHICLE_CLASS,
    GET_VEHICLE_MAKE,
    GET_VEHICLE_MODEL,
    GET_VEHICLE_USAGES,
    TITLES,
    UPDATE_PASSWORD
} from "./userRoute";

export const getAvailablePolicy = () => {
    return authorizedGateRequest.get(GET_AVAILABLE_POLICY);
};

export const getPolicyType = (type: string) => {
    return authorizedGateRequest.get(`${GET_POLICY_TYPE}/${type}`);
};

export const getAllTitle = () => {
    return authorizedGateRequest.get(TITLES);
};

export const getAllId = () => {
    return authorizedGateRequest.get(GET_ID);
};

export const getAllStates = () => {
    return authorizedGateRequest.get(`${GET_STATES}`);
};

export const getLga = (stateName: string) => {
    return authorizedGateRequest.get(`${GET_LGA}/${stateName}/lgas`);
};

export const getAllHospital = (data) => {
    return authorizedGateRequest.get(`${GET_HOSPITAL}/${data.stateName}/${data.lgaName}`);
};

export const motorPolicy = () => {
    return authorizedGateRequest.get(ALL_VEHICLE_POLICY);
};

export const healthPolicy = () => {
    return authorizedGateRequest.get(ALL_HEALTH_POLICY);
};

export const buyHealthPolicy = (payload) => {
    return authorizedGateRequest.post(BUY_HEALTH_POLICY, payload, {
        headers: {
            contentType: 'multipart/form-data'
        }
    });
};

export const buyVehiclePolicy = (payload) => {
    return authorizedGateRequest.post(BUY_VEHICLE_POLICY, payload, {
        headers: {
            contentType: 'multipart/form-data'
        }
    });
};

export const confirmHealthPolicyPayment = (payload) => {
    return authorizedGateRequest.post(CONFIRM_HEALTH_POLICY_PAYMENT, payload, );
};


export const transactions = () => {
    return authorizedGateRequest.get(ALL_TRANSACTIONS);
};

export const updatePassword = () => {
    return authorizedGateRequest.get(UPDATE_PASSWORD);
};

export const getAllVehicleMake = () => {
    return authorizedGateRequest.get(GET_VEHICLE_MAKE);
};

export const getAllVehicleModel = (id) => {
    return authorizedGateRequest.get(`${GET_VEHICLE_MODEL}/${id}`);
};

export const getAllVehicleClass = () => {
    return authorizedGateRequest.get(GET_VEHICLE_CLASS);
};
export const getAllVehicleUsage = () => {
    return authorizedGateRequest.get(GET_VEHICLE_USAGES);
};
