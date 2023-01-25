import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import BodySection from './BodySection';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

describe('BodySectionWithMarginBottom', () => {
  it('BodySectionWithMarginBottom renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BodySectionWithMarginBottom title="test title" />, div);
    console.log('true');
    ReactDOM.unmountComponentAtNode(div);
  });

  it('BodySectionWithMarginBottom rendered with the default title and children', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );
    const element = wrapper.find(BodySection);
    const child = wrapper.find('p');
    expect(element.length).toBe(1);
    expect(child.text()).toBe('test children node');
  });
});
