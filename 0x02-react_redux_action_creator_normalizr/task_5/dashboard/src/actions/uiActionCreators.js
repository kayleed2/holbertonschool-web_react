import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';
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
