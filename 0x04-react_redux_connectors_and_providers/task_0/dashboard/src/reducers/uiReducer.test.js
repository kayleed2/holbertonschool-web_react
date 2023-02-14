import { uiReducer } from './uiReducer';
import { Map } from 'immutable';

describe('uiReducer', () => {
    it('verifies uiReducer function equals the initial state when no action is passed', () => {
      const initial = Map({
        isUserLoggedIn: false,
        user: {},
        isNotificationDrawerVisible: false,
      });
      expect(uiReducer(undefined, {}).toJS()).toEqual(initial);
    });
  
    it('verifies uiReducer function equals the initial state when the action SELECT_COURSE is passed', () => {
      const initial = Map({
        isUserLoggedIn: false,
        user: {},
        isNotificationDrawerVisible: false,
      });
      const action = {
        type: 'SELECT_COURSE',
        index: 0,
      };
      expect(uiReducer(initial, action).toJS()).toEqual(initial.toJS());
    });
  
    it('verifies uiReducer function, when the action DISPLAY_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property', () => {
      const initial = Map({
        isUserLoggedIn: false,
        user: {},
        isNotificationDrawerVisible: false,
      });
      const action = {
        type: 'DISPLAY_NOTIFICATION_DRAWER',
      };
      expect(uiReducer(initial, action).toJS()).toEqual(
        initial.toJS(),
        { isNotificationDrawerVisible: true }
      );
    });
  
    it('verifies uiReducer function, when the action HIDE_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property', () => {
      const initial = Map({
        isUserLoggedIn: false,
        user: {},
        isNotificationDrawerVisible: false,
      });
      const action = {
        type: 'HIDE_NOTIFICATION_DRAWER',
      };
      expect(uiReducer(initial, action).toJS()).toEqual(
        initial.toJS(),
        { isNotificationDrawerVisible: false }
      );
    });
});
