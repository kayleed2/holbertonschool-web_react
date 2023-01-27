import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes';
import { bindActionCreators } from 'redux';

export function markAsAread(index) {
    return {
      type: MARK_AS_READ,
      index,
    };
}

export const boundMarkAsAread = bindActionCreators(markAsAread(index), dispatch);

export function setNotificationFilter(filter) {
    return {
      type: SET_TYPE_FILTER,
      filter,
    };
}

export const boundNotifFilter= bindActionCreators(setNotificationFilter(filter), dispatch);
