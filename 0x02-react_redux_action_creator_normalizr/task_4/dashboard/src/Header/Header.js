import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton_logo.jpg';
import AppContext from '../App/AppContext';

const styles = StyleSheet.create({
  AppHeader: {
    color: '#e0354b',
    display: 'flex',
    alignItems: 'center',
  },
  imgSize: {
    height: '15rem',
    width: '15rem',
  },
  title: {
    display: 'inline',
    fontSize: '2rem',
    marginLeft: '1rem',
  },
  button: {
    border: 'none',
    background: 'none',
    fontSize: '1rem',
  },
  logOut: {
    marginLeft: '3.75rem',
  },
});

export default function Header() {
  const { user, logOut } = React.useContext(AppContext);

  return (
    <header className={css(styles.AppHeader)}>
      <img src={logo} className={css(styles.imgSize)} alt="logo" />
      <h1 className={css(styles.title)}>School dashboard</h1>
      {user.isLoggedIn ? (
        <div className={css(styles.logOut)}>
          <p>Welcome {user.email}</p>
          <button className={css(styles.button)} onClick={logOut}>
            (logout)
          </button>
        </div>
      ) : null}
    </header>
  );
}
