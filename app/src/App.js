import React from 'react';
import ReactDOM from 'react-dom';
import search from './icons/search.svg';
import './App.css';
import SearchBar from './components/SearchBar.js';
import Card from './components/Card.js';
import Tag from './components/Tag.js';
import issuePage from './issuePage.js';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import CardMatrix from './components/CardMatrix.js';


function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
      <h1>Github Issue Viewer</h1>
        <SearchBar/>
        <CardMatrix/>
      </header>
    </div>
    </Router>
  );
}

const Home = () => (
  <div>
  <h1> Home Page </h1>
  </div>

);

export default App;
