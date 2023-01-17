import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import './Login.css';

function Login() {
  return (
    <React.Fragment>
        <body className="App-body">
            <p>Login to access the full dashboard</p>
            <form>
                <label for="email">Email</label>
                <input type="text" id="email" name="email"></input>
                <label for="password">Password</label>
                <input type="text" id="password" name="password"></input>
                <button type="button">OK</button>
            </form>
        </body>
    </React.Fragment>
  );
}

export default Login;
