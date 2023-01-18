import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import { assert } from 'chai';


describe('App', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  test('Notifications comp exists', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Notifications')).toHaveLength(1);
  });

  test('Header comp exists', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Header')).toHaveLength(1);
  });

  test('Login component exists by default', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Login')).toHaveLength(1);
    expect(wrapper.find('CourseList')).toHaveLength(0);
  });

  test('CourseList component exists when isLoggedIn is true', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find('CourseList')).toHaveLength(1);
    expect(wrapper.find('Login')).toHaveLength(0);
  });

  test('Footer comp exists', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Footer')).toHaveLength(1);
  });
});
