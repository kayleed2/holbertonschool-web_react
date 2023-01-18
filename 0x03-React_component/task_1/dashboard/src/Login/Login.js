import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import './Login.css';

function Login() {
  return (
    <React.Fragment>
        <div className="App-body">
            <p>Login to access the full dashboard</p>
            <form>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email"></input>
                <label htmlFor="password">Password</label>
                <input type="text" id="password" name="password"></input>
                <button type="button">OK</button>
            </form>
        </div>
    </React.Fragment>
  );
}

export default Login;
