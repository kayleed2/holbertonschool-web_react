import React, { Component } from 'react';
import PropTypes from 'prop-types';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

const opacityKeyframes = {
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
};

const bounceKeyframes = {
  '0%': {
    transform: 'translateY(0px)',
  },
  '50%': {
    transform: 'translateY(-5px)',
  },
  '100%': {
    transform: 'translateY(5px)',
  },
};

const styles = StyleSheet.create({
  fullNotifications: {},
  menuItem: {
    textAlign: 'right',
    ':hover': {
      cursor: 'pointer',
      animationName: [opacity, animate],
      animationDuration: '1s, 0.5s',
      animationIterationCount: 3,
    },
  },
  notificationsDiv: {
    width: '30%',
    float: 'right',
    border: '2px dashed #e11d3f',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  notifications: {
    padding: '15px',
  },
  closeIcon: {
    width: '20px',
    height: '20px',
  },
  closeButton: {
    backgroundColor: 'white',
    border: 'none',
    height: '20px',
  },
  notificationsSmallDiv: {
    '@media (max-width: 900px)': {
      border: 'none',
      fontSize: '20px',
      paddingBottom: '10000px',
    },
  },
  notificationsSmall: {
    '@media (max-width: 900px)': {
      padding: '0px',
    },
  },
  smallUl: {
    '@media (max-width: 900px)': {
      padding: '0px',
    },
  },
});

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
    this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.displayDrawer !== nextProps.displayDrawer) {
      return (
        nextProps.listNotifications.length > 0 &&
        nextProps.listNotifications.length >=
          this.props.listNotifications.length
      );
    }
    return false;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { handleDisplayDrawer, handleHideDrawer, listNotifications } = this.props;

    return (
      <div className={css(styles.fullNotifications)}>
        <div className={css(styles.menuItem)}>
          <p onClick = { handleDisplayDrawer }>Your notifications</p>
        </div>
        {this.props.displayDrawer ? (
      <div
      className={css(
        styles.notificationsDiv,
        styles.notificationsSmallDiv
      )}
    >
      <div
        className={css(styles.notifications, styles.notificationsSmall)}
      >
        {this.props.listNotifications.length === 0 ? (
          <p>No new notification for now</p>
        ) : (
          <React.Fragment>
            <p>Here is the list of notifications</p>
            <ul className={css(styles.smallUl)}>
              {this.props.listNotifications.map((v) => {
                return (
                  <NotificationItem
                    markAsRead={this.markAsRead}
                    key={v.id}
                    type={v.type}
                    value={v.value}
                    html={v.html}
                    id={v.id}
                  />
                );
              })}
            </ul>
          </React.Fragment>
        )}
      </div>
      <button
        className={css(styles.closeButton)}
        onClick={this.props.handleHideDrawer}
        aria-label={'Close'}
      >
        <img
              src={closeIcon}
              alt=""
              id="close-icon"
              className={css(styles.closeIcon)}
        />
      </button>
    </div>
   ) : null}
  </div>
);
}
}

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  displayDrawer: PropTypes.bool,
  handleHideDrawer: PropTypes.func,
  handleDisplayDrawer: PropTypes.func,
};

Notifications.defaultProps = {
  listNotifications: [],
  displayDrawer: false,
  handleHideDrawer: () => console.log('handleHideDrawer missing'),
  handleDisplayDrawer: () => console.log('handleDisplayDrawer missing'),
};

export default Notifications;
