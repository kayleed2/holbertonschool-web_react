import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ type, html, value, markAsRead, id }) {
  return (
    <li onClick={() => markAsRead(id)} data-notification-type={type} dangerouslySetInnerHTML={html}>{value}</li>
    );
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.objectOf(PropTypes.string),
  id: PropTypes.number,
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: 'default',
  id: 0,
  markAsRead: () => console.log(`markAsRead missing`),
};

export default React.memo(NotificationItem);
