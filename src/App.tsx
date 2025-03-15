import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from "./features/auth/components/LoginForm/LoginForm";
import {Header} from "./stories/Header";

function App() {
  return (
    <div className="App">
      <LoginForm />

        <Header
            onCreateAccount={() => {}}
            onLogin={() => {}}
            onLogout={() => {}}
            user={{
                name: 'Jane Doe'
            }}
        />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
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
