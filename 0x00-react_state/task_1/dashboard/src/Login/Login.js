import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  login: {
    marginTop: '3rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    '@media (min-width: 900px)': {
      flexDirection: 'row',
      alignItems: 'center',
    },
  },
  input: {
    fontSize: '1rem',
    border: '1px solid lightgrey',
    ':focus': {
      outline: 'none',
      border: '1px solid #e11d3f',
      padding: '0.5rem',
    },
    '@media (min-width: 900px)': {
      margin: '0 1rem',
    },
  },
  button: {
    border: '1px solid lightgrey',
    borderRadius: '0.5rem',
    width: '2.5rem',
    ':hover': {
      outline: 'none',
      border: '1px solid #e11d3f',
    },
    '@media (min-width: 900px)': {
      padding: '0.5rem .5rem',
    },
  },
});

export default function Login() {
  return (
    <div className={css(styles.login)}>
      <p>Login to access the full dashboard</p>
      <form className={css(styles.form)}>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            className={css(styles.input)}
            name="email"
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            id="password"
            className={css(styles.input)}
            name="password"
          />
        </label>
        <button className={css(styles.button)}>OK</button>
      </form>
    </div>
  );
}
