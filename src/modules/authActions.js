import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, SAVE_RESPONSE_DATA  } from './authTypes';


export const loginSuccess = (accessToken) => ({
  type: LOGIN_SUCCESS,
  payload: accessToken,
});

export const saveResponseData = (accessToken) => ({
  type: SAVE_RESPONSE_DATA,
  payload: accessToken,
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});

export const logout = () => ({
  type: LOGOUT,
});

