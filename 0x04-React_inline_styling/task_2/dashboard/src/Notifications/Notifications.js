import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  notification: {
    display: 'flex',
    flexDirection: 'column',
    float: 'right',
    marginRight: '1rem',
  },
  menu: {
    alignSelf: 'flex-end',
    marginBottom: '1rem',
  },
  items: {
    border: '1px red dashed',
    padding: '1rem 10rem 2rem 2rem',
  },
  close: {
    border: 0,
    background: 'transparent',
    position: 'absolute',
    right: 50,
    top: 60,
  },
  x: {
    border: 0,
    height: 15,
    width: 15,
  },
});

class Notifications extends React.Component {
  constructor() {
    super();
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;
    return (
      <div className={css(styles.notification)}>
        <div className={css(styles.menu)}>Your Notifications</div>
        {displayDrawer && (
          <div className={css(styles.items)}>
            {listNotifications.length ? (
              <p>Here is the list of notifications</p>
            ) : (
              <p>No new notification for now</p>
            )}
            {listNotifications ? (
              listNotifications.map((v) => (
                <NotificationItem
                  key={v.id}
                  type={v.type ? v.type : 'default'}
                  value={v.value}
                  html={v.html}
                  markAsRead={() => this.markAsRead(v.id)}
                />
              ))
            ) : (
              <tr>No course available yet</tr>
            )}
            <button className={css(styles.close)} aria-label="Close" onClick={() => console.log('Close button has been clicked')}>
              <img src={closeIcon} height="15px" width="15" alt="close icon" className={css(styles.x)}/>
            </button>
          </div>
        )}
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
