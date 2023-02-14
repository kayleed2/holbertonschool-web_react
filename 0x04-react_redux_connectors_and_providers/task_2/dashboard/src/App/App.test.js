import React from 'react';
import ReactDOM from 'react-dom';
import { jest } from '@jest/globals';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import { Map } from 'immutable';
import App from './App';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import { StyleSheetTestUtils } from 'aphrodite';

describe('mapStateToProps returns', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  const state = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {
      email: '',
      password: '',
      isLoggedIn: false,
    },
  });

  const returnProps = {
    isLoggedIn: false,
    isNotificationDrawerVisible: false,
    user: {
      email: '',
      password: '',
      isLoggedIn: false,
    },
  };

  it('expected object from state', () => {
    expect(mapStateToProps({ ui: state })).toEqual(returnProps);
  });
});
