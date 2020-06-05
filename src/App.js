import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Page from './Pages/Page'

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
