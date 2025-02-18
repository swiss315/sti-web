import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import {
    handleFailure,
    handleLoginFailure,
    handleLoginRequest, handleLoginSuccess,
    handleLogout, handleRegisterRequest, handleSaveUserData,
    handleSuccess
} from "../Constant/action.ts";


export const initialState: Auth = {
    token: null,
    isAuthenticated: false,
    loading: false,
    error: null,
    next: true,
    email: '',
    userType: '',
    userData: ''
};

const authReducer = createReducer(initialState, (builder: any) => {
    builder
        .addCase(handleLoginRequest, (state) => {
            state.loading = true;
        })
        .addCase(handleRegisterRequest, (state) => {
            state.loading = true;
        })
        .addCase(handleLoginSuccess, (state: Auth, action: PayloadAction<{ token: string}>) => {
            console.log('handleLoginSuccess', action.payload);
            state.loading = false;
            state.isAuthenticated = true;
            state.token = action.payload.token;
        })
        .addCase(
            handleLoginFailure,
            (state: Auth, action: PayloadAction<string>) => {
                state.loading = false;
                state.error = action.payload;
            },
        )
        .addCase(handleLogout, (state: Auth) => {
            state.isAuthenticated = false;
            state.token = null;
            state.error = null;
            state.loading = false;
        })


        .addCase(handleSaveUserData, (state: Auth, action: PayloadAction) => {
            console.log('handleSaveCompanyId', action.payload);
            state.userData = action.payload;
        })


        .addCase(handleSuccess, (state: Auth) => {
            state.loading = false;
            state.error = null;
        })
        .addCase(handleFailure, (state: Auth, action: PayloadAction<string>) => {
            console.log('reducer failure', action.payload);
            state.loading = false;
            console.log('reducer', action.payload);
            state.error = action.payload;
        });
});

export default authReducer;
