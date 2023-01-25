import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import closeIcon from '../assets/close-icon.png';

const styles = StyleSheet.create({
  fullNotifications: {},
  menuItem: {
    textAlign: 'right',
    ':hover': {
      transform: 'translateY(-5px)',
      animationDuration: '1s',
      animationTimingFunction: 'linear',
      animationIterationCount: 3,
      cursor: 'pointer',
      opacity: 0.5,
    },
  },
  notificationsDiv: {
    '@media (max-width: 900px)': {
      width: '100%',
      border: '2px dashed #e11d3f',
      display: 'flex',
      float: 'none',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    width: '30%',
    border: '2px dashed #e11d3f',
    display: 'flex',
    float: 'right',
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

class Notifications extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={css(styles.fullNotifications)}>
        <div className={css(styles.menuItem)}>
          <p onClick={this.props.handleDisplayDrawer}>Your notifications</p>
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
                    {this.props.listNotifications.map((item) => {
                      return (
                        <NotificationItem
                          markNotificationAsRead={
                            this.props.markNotificationAsRead
                          }
                          key={item.id}
                          type={item.type}
                          value={item.value}
                          html={item.html}
                          id={item.id}
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
