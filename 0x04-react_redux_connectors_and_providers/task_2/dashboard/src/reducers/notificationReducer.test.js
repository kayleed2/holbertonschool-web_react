import { fetchNotifications, markAsRead, setNotificationFilter } from '../actions/notificationActionCreators';
import { notifReducer, initialState } from './notificationReducer';
  
  const notificationsList = {
    data: [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', value: 'New data available' },
    ],
  };
  
  describe('notifReducer', () => {
    it('should set the filter', () => {
      const filter = 'DEFAULT';
      const action = setNotificationFilter(filter);
      const state = notifReducer(initialState, action);
      expect(state.filter).toEqual(filter);
    });
  
    it('should mark the notification as read', () => {
      const action = {
        type: 'MARK_AS_READ',
        index: 2,
      };
      expect(notifReducer(action, notificationsList.data)).toEqual(
        markAsRead(2)
      );
    });
  
    it('should fetch the list of notifications', () => {
      const expectedResult = {
        filter: 'DEFAULT',
        notifications: [
          {
            id: 1,
            isRead: false,
            type: 'default',
            value: 'New course available',
          },
          { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
          { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
        ],
      };
      const action = fetchNotifications(notificationsList.data);
      expect(notifReducer(initialState, action)).toEqual(expectedResult);
    });
  });
