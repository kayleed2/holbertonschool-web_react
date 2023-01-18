import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow', () => {
  it('CourseListRow with isHeader true and no textSecondCell', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="test" />
    );
    expect(wrapper.find('th').length).toEqual(1);
    expect(wrapper.find('th').text()).toEqual('test');
    expect(wrapper.find('th').prop('colSpan')).toEqual(2);
  });

  it('CourseListRow with isHeader true and both cells', () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell="test1"
        textSecondCell="test2"
      />
    );
    expect(wrapper.find('th').length).toEqual(2);
    expect(wrapper.find('th').at(0).text()).toEqual('test1');
    expect(wrapper.find('th').at(1).text()).toEqual('test2');
  });

  it('CourseListRow with two td elements within a tr element', () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={false}
        textFirstCell="test1"
        textSecondCell="test2"
      />
    );
    const tr = wrapper.find('tr');
    expect(tr.find('td').length).toEqual(2);
    expect(tr.find('td').at(0).text()).toEqual('test1');
    expect(tr.find('td').get(1).props.children).toBe('test2');
  });
});
