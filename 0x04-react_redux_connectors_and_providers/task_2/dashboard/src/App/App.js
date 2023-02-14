import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { getLatestNotification } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';
import AppContext from './AppContext';
import { connect } from 'react-redux';
import * as uiActions from '../actions/uiActionCreators';

const styles = StyleSheet.create({
    body: {
        margin: '1rem',
    },
    mainContent: {
        borderTop: '3px #e0354b solid',
        paddingLeft: '4rem',
        '@media (min-width: 900px)': {
            paddingLeft: '0',
        },
    },
    footer: {
        borderTop: '3px #e0354b solid',
        position: 'absolute',
        bottom: 0,
        width: '98%',
        textAlign: 'center',
        fontStyle: 'italic',
    },
});

class App extends Component {
    constructor(props) {
        super(props);
        // this.handleHideDrawer = this.handleHideDrawer.bind(this);
        // this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
        this.logIn = this.logIn.bind(this);
        this.logOut = this.logOut.bind(this);
        this.state = {
            // displayDrawer: false,
            user: {
                email: '',
                password: '',
                isLoggedIn: false,
            },
            logOut: () => this.logOut(),
            listNotifications: [
                { id: 1, type: 'default', value: 'New course available' },
                { id: 2, type: 'urgent', value: 'New resume available' },
                { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
            ],
        };
    }

    // handleHideDrawer() {
    //     this.setState({ displayDrawer: false });
    // }

    // handleDisplayDrawer() {
    //     this.setState({ displayDrawer: true });
    // }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeydown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeydown);
    }

    handleKeydown = (event) => {
        if (event.ctrlKey && event.key === 'h') {
            alert('Logging you out');
            const { logOut } = this.props;
            logOut();
        }
    };

    logIn = (email, password) => {
        this.setState({
            user: {
                email: email,
                password: password,
                isLoggedIn: true,
            },
        });
    };

    logOut = () => {
        this.setState({
            user: {
                email: '',
                password: '',
                isLoggedIn: false,
            },
        });
    };

    markNotificationAsRead(id) {
        this.setState({
            listNotifications: this.state.listNotifications
                .map((notification) => {
                    if (notification.id === id) {
                        return null;
                    }
                    return notification;
                })
                .filter((notification) => notification !== null),
        });
    }

    render() {
        const listCourses = [
            { id: '1', name: 'ES6', credit: 60 },
            { id: '2', name: 'Webpack', credit: 20 },
            { id: '3', name: 'React', credit: 40 },
        ];

        return (
            <AppContext.Provider value={this.state}>
              <div className={css(styles.body)}>
                <Notifications
                  handleHideDrawer={this.props.hideNotificationDrawer}
                  handleDisplayDrawer={this.props.displayNotificationDrawer}
                  displayDrawer={this.props.displayDrawer}
                  listNotifications={this.state.listNotifications}
                  markNotificationAsRead={this.markNotificationAsRead}
                />
                <Header />
                <main className={css(styles.mainContent)}>
                  {this.state.user.isLoggedIn ? (
                    <BodySectionWithMarginBottom title="Course list">
                      <CourseList listCourses={listCourses} />
                    </BodySectionWithMarginBottom>
                  ) : (
                    <BodySectionWithMarginBottom title="Log in to continue">
                      <Login logIn={this.logIn} />
                    </BodySectionWithMarginBottom>
                  )}
                  <BodySection title="News from the School">
                    <p> buffalo buffalo buffalo buffalo </p>
                  </BodySection>
                </main>
                <footer className={css(styles.footer)}>
                  <Footer />
                </footer>
              </div>
            </AppContext.Provider>
          );
        }
      }
      
      export const mapStateToProps = (state) => {
        return {
          isLoggedIn: state.ui.get('isUserLoggedIn'),
          isNotificationDrawerVisible: state.ui.get('isNotificationDrawerVisible'),
          user: state.ui.get('user'),
        };
      };

      export const mapDispatchToProps = (dispatch) => {
        return {
          loginSuccess: () => dispatch(uiActions.loginSuccess()),
          displayNotificationDrawer: () =>
            dispatch(uiActions.displayNotificationDrawer()),
          hideNotificationDrawer: () => dispatch(uiActions.hideNotificationDrawer()),
        };
      };
      
      connect(mapStateToProps, uiActions)(App);
      
      export default App;
      