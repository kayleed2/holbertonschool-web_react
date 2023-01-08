import logo from './holbertonlogo.jpg';
import { getFullYear } from './utils.js';
import { getFooterCopy } from './utils.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        <label for="email">Email</label>
        <input type="text" id="email" name="email"></input>
        <label for="password">Password</label>
        <input type="text" id="password" name="password"></input>
        <button type="button">OK</button>
      </body>
      <footer className="App-footer">
        <p>{getFullYear()} - {getFooterCopy(0)}</p>
      </footer>
    </div>
  );
}

export default App;
