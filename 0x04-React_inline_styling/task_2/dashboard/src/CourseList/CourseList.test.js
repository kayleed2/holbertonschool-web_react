import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';

describe('CourseList', () => {
  it('Renders CourseList component without crashing', () => {
    shallow(<CourseList />);
  });

  it('Verifies that 3 CourseListRows rendered with empty course list passed', () => {
    const wrapper = shallow(<CourseList listCourses={[]} />);
    expect(wrapper.find('CourseListRow').length).toBe(3);
    expect(wrapper.find('CourseListRow').last().props().textFirstCell).toBe(
      'No course available yet'
    );
  });

  it('Verifies that 3 CourseListRows rendered with no course list passed', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find('CourseListRow').length).toBe(3);
    expect(wrapper.find('CourseListRow').last().props().textFirstCell).toBe(
      'No course available yet'
    );
  });

});
