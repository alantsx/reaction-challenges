import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Reaction Challenges page, built with React
        </p>

        <h3>
          Contributors: <a href='https://github.com/alantsx'>@alantsx</a> | <a href='https://github.com/carol-andradech'>@carol-andradech</a>
        </h3>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
