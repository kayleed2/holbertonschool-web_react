import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters, FETCH_NOTIFICATIONS_SUCCESS } from '../actions/notificationActionTypes';

export const initialState = {
    notifications: [],
    filter: NotificationTypeFilters.DEFAULT,
};

export const notifReducer = (state = initialState, action) => {
    switch (action.type) {
      case MARK_AS_READ:
        const read = state.notifications.map((notification) => {
          if (notification.id === action.index) {
            return {
              ...notification,
              isRead: true,
            };
          }
          return notification;
        });
        return {
          filter: state.filter,
          notifications: read,
        };
      case SET_TYPE_FILTER:
        return {
          filter: action.filter,
          notifications: state.notifications,
        };
      case FETCH_NOTIFICATIONS_SUCCESS:
        const success = action.data.map((notification) => {
          return {
            ...notification,
            isRead: false,
          };
        });
        return {
          filter: state.filter,
          notifications: success,
        };
      default:
        return state;
    }
};
