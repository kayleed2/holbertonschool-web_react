const { Map } = require('immutable');
import {  notificationNormalizer } from '../schema/notifications';
import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters, FETCH_NOTIFICATIONS_SUCCESS } from '../actions/notificationActionTypes';

export const initialState = Map({
    notifications: [],
    filter: NotificationTypeFilters.DEFAULT,
});

export const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case MARK_AS_READ:
      return state.setIn([action.index, 'isRead'], true);
    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);
    case FETCH_NOTIFICATIONS_SUCCESS:
      return state.merge(notificationNormalizer(action.data));
    default:
      return state;
  }
};
