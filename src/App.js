import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Router , link} from 'react-router-dom';
import Page from './Pages/Paje'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Page />
      </BrowserRouter>
    </div>
  );
}

export default App;
