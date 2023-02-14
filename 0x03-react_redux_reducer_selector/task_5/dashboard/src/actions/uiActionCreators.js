import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE, 
} from './uiActionTypes';
import 'node-fetch';
import { bindActionCreators } from 'redux';

export function login(email, password) {
    return {
      type: LOGIN,
      user: {email, password}
    };
}
export const boundLogin = bindActionCreators(login(email, password), dispatch);

export function logout() {
    return {
      type: LOGOUT,
    };
}
export const boundLogout = bindActionCreators(logout(), dispatch);

export function displayNotificationDrawer() {
    return {
      type: DISPLAY_NOTIFICATION_DRAWER,
    };
}
export const boundDNF = bindActionCreators(displayNotificationDrawer(), dispatch);

export function hideNotificationDrawer() {
    return {
      type: HIDE_NOTIFICATION_DRAWER,
    };
}
export const boundHNF = bindActionCreators(hideNotificationDrawer(), dispatch);

export const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS,
  };
};

export const loginFailure = () => {
  return {
    type: LOGIN_FAILURE,
  };
};

export const loginRequest = (email, password) => {
  return (dispatch) => {
    dispatch(login(email, password));
    return fetch("http://localhost:8564/login-success.json")
      .then((res) => res.json())
      .then((json) => dispatch(loginSuccess()))
      .catch((error) => dispatch(loginFailure()));
  };
};
