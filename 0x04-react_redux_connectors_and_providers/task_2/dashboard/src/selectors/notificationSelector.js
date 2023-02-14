import { Map, getIn } from 'immutable';

export const filterTypeSelected = state => state.get('filter');

export const getNotifications = state => getIn(state, ['notifications'], Map());

export const getUnreadNotifications = state => {
  const notifications = getNotifications(state);
  return notifications.filter(notification => !notification.isRead);
}
