import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList'
import PropTypes from 'prop-types';


App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
};


function App( { isLoggedIn } ) {
  return (
    <React.Fragment>
      <Notifications />
      <Header />
      <main className="App-body">
        {isLoggedIn ? <CourseList /> : <Login />}
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
