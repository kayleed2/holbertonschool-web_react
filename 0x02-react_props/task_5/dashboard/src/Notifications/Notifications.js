import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';


Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default function Notifications( { displayDrawer, listNotifications }) {
  return (
    <div className='wrap'>
      <div className='menuItem'>
      Your Notifications
      </div>
      {displayDrawer && (
        <div className="Notifications">
          {listNotifications.length ? (
            <p>Here is the list of notifications</p>
          ) : (
            <p>No new notification for now</p>
          )}
          {listNotifications ? (
            listNotifications.map((v) => (
              <NotificationItem
                key={v.id}
                type={v.type}
                value={v.value}
                html={v.html}
              />
            ))
          ) : (
            <tr>No course available yet</tr>
          )}
          <button
            style={{
              border: 0,
              background: 'white',
              position: 'absolute',
              right: 35,
              top: 60,
            }}
            aria-label="Close"
            onClick={() => console.log('Close button has been clicked')}
          >
            <img src={closeIcon} height="15px" width="15" alt="close icon" />
          </button>
        </div>
      )}
    </div>
  );
}
