import React from 'react';
//import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { Home } from './pages/Home/index.js';

function App() {
  return (
    <div className="App">
     
      <Router>
        <Switch>
          <Route path="/" component ={Home}/>
        </Switch>
      </Router>
    
    </div>
  );

  /**
   *  <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code> src/App.js</code> e salve a alteracao.</p>
        <p>Lembrar que no trabalho uso o Windows 1252 ( nao usar acentos  e caracteres especiais) </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Leitura sobre React </a>
      </header>
   */
}

export default App;
