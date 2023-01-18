import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList'
import propTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';


class App extends React.Component {
  render() {
    const { isLoggedIn } = this.props;
    
    const listCourses = [
    { id: '1', name: 'ES6', credit: 60 },
    { id: '2', name: 'Webpack', credit: 20 },
    { id: '3', name: 'React', credit: 40 },
  ];

  const listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
  ];

  return (
    <React.Fragment>
     <Notifications listNotifications={listNotifications} />
      <Header />
      <main className="App-body">
        {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
      </main>
      <Footer />
    </React.Fragment>
  );
}
}


App.propTypes = {
  isLoggedIn: propTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
};

export default App;
