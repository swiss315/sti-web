import {createAction} from '@reduxjs/toolkit';

export const handleLoginFailure = createAction<string>('LOGIN_FAILURE');
export const handleLogoutRequest = createAction('REQUEST_LOGOUT');
export const handleLogout = createAction('LOGOUT');
