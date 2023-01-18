import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';
import { assert } from 'chai';

describe('Header', () => {
    it('Header renders without crashing', () => {
      shallow(<Header />);
    });
  
    it('Header renders img tag', () => {
      const wrapper = shallow(<Header />);
      assert.equal(wrapper.find('img').length, 1);
    });
  
    it('Header renders h1 tag', () => {
      const wrapper = shallow(<Header />);
      assert.equal(wrapper.find('h1').length, 1);
    });
});
