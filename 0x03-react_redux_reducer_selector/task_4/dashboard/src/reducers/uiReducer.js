import { 
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
} from '../actions/uiActionTypes';

import { Map } from 'immutable';

export const initial = Map({
    isUserLoggedIn: false,
    isNotificationDrawerVisible: false,
    user: {},
});

export const uiReducer = (state = initial, action) => {
    switch (action.type) {
      case LOGIN_SUCCESS:
        return state.set({
          ...state,
          isUserLoggedIn: true,
          user: action.user,
        });
      case LOGIN_FAILURE:
        return state.set({
          ...state,
          isUserLoggedIn: false,
          user: {},
        });
      case LOGOUT:
        return state.set({
          ...state,
          isUserLoggedIn: false,
          user: {},
        });
      case DISPLAY_NOTIFICATION_DRAWER:
        return state.set({
          ...state,
          isNotificationDrawerVisible: true,
        });
      case HIDE_NOTIFICATION_DRAWER:
        return state.set({
          ...state,
          isNotificationDrawerVisible: false,
        });
      default:
        return state;
    }
};
