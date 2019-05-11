import React from 'react';
import logo from './logo.svg';
import './App.css';
import Friends from './Item.js';
import './Item.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Friends/>
      </header>
    </div>
  );
}

export default App;
