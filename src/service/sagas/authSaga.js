import {
    handleFailure,
    handleLoginRequest,
    handleLoginSuccess,
    handleRegisterRequest, handleSaveUserData, handleVerifyOtpRequest,
} from "../Constant/action.ts";
import {call, put, takeLatest} from 'redux-saga/effects';
import {loginUser} from "../api/Authorization/loginCustomer";
import {NavigateFunction} from "react-router-dom";
import type {Login, Register, VerifyOtpCode} from "../Constant/serviceType";
import {PayloadAction} from "@reduxjs/toolkit";
import {postVerifyOtpRequest, registerCustomer} from "../api/Authorization/registerCustomer";
import {showToast} from "../Constant/toastAction.js";


function* register(action: PayloadAction<{ payload: Register, navigate: NavigateFunction }>) {
    try {
        const {payload, navigate} = action.payload;
        const {success, token, error, user} = yield call(
            registerCustomer,
            payload,
            navigate
        );
        console.log(success, token, error, user);
        if (success) {
            const authToken = token;
            yield put(handleLoginSuccess({authToken}));
            yield put(handleSaveUserData(user));
            const id = user.id;
            console.log(id);

            yield put(showToast('Success', 'Register successful!', 'success'));

        } else {
            console.log('errorjjjj', error);
            yield put(handleFailure(error));
            yield put(showToast('Error', error, 'error'));
        }
        return success;
    } catch (error) {
        console.log(
            'Auth saga error:',
            error,
        );
        yield put(
            handleFailure(error.response?.data?.message || error.message),
        );
    }
}

function* login(action: PayloadAction<{ payload: Login, navigate: NavigateFunction }>) {
    try {
        // yield put(showToast('Success', 'Login successful!', 'success'));

        const {payload, navigate} = action.payload;
        const {success, data, error, user} = yield call(
            loginUser,
            payload,
            navigate,
        );
        console.log(success, data, error, user);
        if (success && user) {
            const email = user.email;
            const token = data;
            yield put(handleLoginSuccess({token, email}));
            const id = user.id;
            console.log(id);
            yield put(handleSaveUserData(user));
            yield put(showToast('Success', 'Login successful!', 'success'));

        } else {
            console.log('errorjjjj', error);
            yield put(handleFailure(error));
            yield put(showToast('Error', error, 'error'));
        }
        return success;
    } catch (error) {
        console.log(
            'Auth saga error:',
            error,
        );
        yield put(
            handleFailure(error.response?.data?.message || error.message),
        );
    }
}

function* verifyOtp(action: PayloadAction<{ payload: VerifyOtpCode, navigate: NavigateFunction }>) {
    try {
        // yield put(showToast('Success', 'Login successful!', 'success'));
        const {payload, navigate} = action.payload;
        const {success, data, error, user} = yield call(
            postVerifyOtpRequest,
            payload,
            navigate,
        );
        console.log(success, data, error, user);
        if (success && user) {
            const email = user.email;
            const token = data;
            yield put(handleLoginSuccess({token, email}));
            const id = user.id;
            console.log(id);

            // yield put(showToast('Success', 'Login successful!', 'success'));

        } else {
            console.log('errorjjjj', error);
            yield put(handleFailure(error));
            yield put(showToast('Error', error, 'error'));
        }
        return success;
    } catch (error) {
        console.log(
            'Auth saga error:',
            error,
        );
        yield put(
            handleFailure(error.response?.data?.message || error.message),
        );
    }
}


function* watchAuthActions() {
    yield takeLatest(handleRegisterRequest, register);
    yield takeLatest(handleLoginRequest, login);
    yield takeLatest(handleVerifyOtpRequest, verifyOtp);

}

export default watchAuthActions;
