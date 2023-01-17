import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

function App() {
  return (
    <React.Fragment>
      <Notifications />
      <Header />
      <Login />
      <Footer />
    </React.Fragment>
  );
}

export default App;
