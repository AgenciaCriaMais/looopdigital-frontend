import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./stories/Header";
import AppRoutes from "./routes";

function App() {
    return (
        <div className="App">
            <Header
                onCreateAccount={() => {
                }}
                onLogin={() => {
                }}
                onLogout={() => {
                }}
                user={{
                    name: 'Jane Doe'
                }}
            />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
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
            <div>
                <h1>Corpo</h1>
                <AppRoutes />
            </div>
        </div>
    );
}

export default App;
