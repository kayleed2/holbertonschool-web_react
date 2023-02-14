import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  item: {
    fontSize: 20,
    padding: '10px 8px',
    borderBottom: '1px solid black',
    '@media (min-width: 900px)': {
      padding: 0,
      border: 'none',
    },
  },
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
        className={
          type === 'default'
            ? css(styles.defaultPriority, styles.item)
            : css(styles.urgentPriority, styles.item)
        }
        data-notification-type={type}
        onClick={markAsRead}
      >
        {value}
      </li>
    );
  }
  return (
    <li
      className={
        type === 'default'
          ? css(styles.defaultPriority, styles.item)
          : css(styles.urgentPriority, styles.item)
      }
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
