import React from 'react';
import Notifications from './Notifications';
import { shallow } from 'enzyme';
import { assert } from 'chai';

describe('Notifications component', () => {
  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('Verifies that Notifications contains .menuItem div by default', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.menuItem').length).toBe(1);
    expect(wrapper.find('.Notification').length).toBe(0);
  });

  it('Verifies that Notifications contains both divs when displayDrawer true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.menuItem').length).toBe(1);
    expect(wrapper.find('.Notifications').length).toBe(1);
  });

  it('Verifies that Notifications includes 3 NotificationItem components when displayDrawer true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('NotificationItem').length).toBe(3);
  });

  it('Verifies that Notifications renders first NotificationItem element correctly when displayDrawer true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('NotificationItem').first().props().type).toEqual(
      'default'
    );
    expect(wrapper.find('NotificationItem').first().props().value).toEqual(
      'New course available'
    );
  });

  it('Verifies that Notifications renders correct text list p tag when displayDrawer true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('p').text()).toEqual(
      'Here is the list of notifications'
    );
  });

  it('Verifies that Notifications renders correctly with no listNotifications', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    expect(wrapper.find('.menuItem').length).toBe(1);
    expect(wrapper.find('NotificationItem').length).toBe(0);
    expect(wrapper.find('p').text()).toEqual('No new notification for now');
  });

  it('Verifies that Notifications renders correctly with empty listNotifications', () => {
    const wrapper = shallow(
      <Notifications displayDrawer listNotifications={[]} />
    );
    expect(wrapper.find('NotificationItem').length).toBe(0);
    expect(wrapper.find('p').text()).toEqual('No new notification for now');
  });

  it('Verifies that Notifications renders p tag correctly with empty listNotifications', () => {
    const wrapper = shallow(
      <Notifications displayDrawer listNotifications={['']} />
    );
    expect(wrapper.find('p').text()).toEqual(
      'Here is the list of notifications'
    );
  });

  const listNotifications = [
    { id: 1, type: 'urgent', value: 'Value 1' },
    { id: 2, html: { __html: 'HTML 1' } },
  ];
  it('Verifies that Notifications renders 2 NotificationItem correctly when passed listNotifications', () => {
    const wrapper = shallow(
      <Notifications displayDrawer listNotifications={listNotifications} />
    );
    expect(wrapper.find('NotificationItem').length).toBe(2);
    expect(wrapper.find('p').text()).toEqual(
      'Here is the list of notifications'
    );
    expect(wrapper.find('li[data-priority="urgent"]'));
    expect(wrapper.find('NotificationItem').get(0).props.type).toEqual(
      'urgent'
    );
    expect(wrapper.find('NotificationItem').get(0).props.value).toEqual(
      'Value 1'
    );
    expect(wrapper.find('NotificationItem').get(1).props.html).toEqual({
      __html: 'HTML 1',
    });
    expect(wrapper.find('NotificationItem').get(1).props.type).toEqual(
      'default'
    );
  });
});
