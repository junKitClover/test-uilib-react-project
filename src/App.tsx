// @ts-ignore
import logo from './logo.svg';
// @ts-ignore
import { Button } from 'try-rollup';
// @ts-ignore
import { Button as TacklitButton } from '@tacklit/style-guide';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button label="from try rollup" primary/>
        <TacklitButton label="from try tacklit" primary/>
      </header>
    </div>
  );
}

export default App;
