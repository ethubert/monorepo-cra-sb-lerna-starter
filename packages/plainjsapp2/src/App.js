import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'plainjsapp1/src/plainJsComp';

function App() {
  return (
    <div className="App">
      <Button />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
