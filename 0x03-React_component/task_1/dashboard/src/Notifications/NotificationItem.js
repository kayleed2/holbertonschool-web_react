import React from 'react';
import propTypes from 'prop-types';

NotificationItem.propTypes = {
  type: propTypes.string,
  value: propTypes.string,
  html: propTypes.shape({
   __html: propTypes.string,
  }),
};

NotificationItem.defaultProps = {
  type: 'default',
};


export default function NotificationItem({ type, html, value} ) {
    if (value) {
        return <li data-priority={type}>{value}</li>;
      }
      return <li data-priority={type} dangerouslySetInnerHTML={html} />;
}
