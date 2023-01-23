import React from 'react';
import NotificationItem from './Notifications';
import Notifications from './Notifications';
import { shallow } from 'enzyme';

describe('NotificationItem', () => {
  it('renders without crashing', () => {
    shallow(<NotificationItem />);
  });

  it('renders with props', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.props().dataPriority === 'default');
    expect(wrapper.props().dataValue === 'test');
  });

  it('Renders with props', () => {
    const wrapper = shallow(
      <NotificationItem type="urgent" html={{ __html: '<u>test</u>' }} />
    );
    expect(wrapper.props().dataPriority === 'urgent');
    expect(wrapper.props().dataValue === 'test');
    expect(wrapper.props().html === '<u>test</u>');
  });

  const listNotifications = [
    { id: 1, type: 'urgent', value: 'Value 1' },
    { id: 2, type: 'default', html: { __html: 'HTML 1' } },
  ];
  it('markAsRead called with correct ID', () => {
    const wrapper = shallow(
      <Notifications displayDrawer listNotifications={listNotifications} />
    );
    const spy = jest.spyOn(wrapper.instance(), 'markAsRead');
    wrapper.find('NotificationItem').get(0).props.markAsRead(1);
    expect(spy).toHaveBeenCalledWith(1);
    wrapper.find('NotificationItem').get(1).props.markAsRead(2);
    expect(spy).toHaveBeenCalledWith(2);
  });
});
