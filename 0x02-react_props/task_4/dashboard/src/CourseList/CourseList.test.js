import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';

describe('CourseList', () => {
  it('Renders CourseList component without crashing', () => {
    shallow(<CourseList />);
  });

  it('Renders 5 CourseListRows', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find('CourseListRow').length).toBe(5);
  });
});
