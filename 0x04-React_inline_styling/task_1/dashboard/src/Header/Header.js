import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton_logo.jpg';

const styles = StyleSheet.create({
  header: {
    color: '#e0354b',
    display: 'flex',
    alignItems: 'center',
  },
  img: {
    height: '15rem',
    width: '15rem',
  },
  title: {
    display: 'inline',
    fontSize: '2rem',
    marginLeft: '1rem',
  },
});

function Header() {
  return (
    <header className={css(styles.header)}>
      <img src={logo} className={css(styles.img)} alt="logo" />
      <h1 className={css(styles.title)}>School dashboard</h1>
    </header>
  );
}

export default Header;
