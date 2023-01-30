import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton_logo.jpg';

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
});

export default function Header() {
  return (
    <header className={css(styles.AppHeader)}>
      <img src={logo} className={css(styles.imgSize)} alt="logo" />
      <h1 className={css(styles.title)}>School dashboard</h1>
    </header>
  );
}
