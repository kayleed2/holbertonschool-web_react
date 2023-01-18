import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  defaultPriority: {
    color: 'blue',
  },
  urgentPriority: {
    color: 'red',
  },
});

function NotificationItem({ markAsRead, type, value, html, id }) {
  if (value) {
    return (
      <li
        className={css(
          type === 'default' ? styles.defaultPriority : styles.urgentPriority
        )}
        data-notification-type={type}
        onClick={markAsRead}
      >
        {value}
      </li>
    );
  }
  return (
    <li
      className={css(
        type === 'default' ? styles.defaultPriority : styles.urgentPriority
      )}
      data-notification-type={type}
      dangerouslySetInnerHTML={html}
      onClick={markAsRead}
    />
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

export default memo(NotificationItem);
