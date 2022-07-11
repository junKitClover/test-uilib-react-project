// @ts-ignore
import logo from './logo.svg';
// @ts-ignore
import { Button, ThemeProvider, Header } from '@tacklit/style-guide';
import './App.css';

function App() {
  return (
    <ThemeProvider theme="tacklit">
      <Header onCreateAccount={()=>{}} onLogin={()=>{}} onLogout={()=>{}}/>
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
            <Button label="from try tacklit" primary/>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
