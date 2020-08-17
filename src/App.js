import React from 'react';
import logo from './logo.svg';

import  Clock from './components/Clock';
import './App.css';

function App() {
  return (
    <div className="App">

     

      <header className="App-header">
        <h1>I <span></span>❤️ React js</h1>
        <img src={logo} className="App-logo" alt="logo" />
        
        <Clock />
      
      </header>
      
    </div>
  );
}

export default App;
