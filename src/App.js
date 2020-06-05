import React from 'react';
import logo from './logo.svg';
import {BrowserRouter} from 'react-router-dom';
import Form from './Pages/Page';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Form />
      </BrowserRouter>
    </div>
  );
}

export default App;
