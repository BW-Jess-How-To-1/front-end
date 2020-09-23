import React from 'react';
import Title from './Component/Header';
import Tutorials from './Component/Tutorial';
import './App.css';
import FormBox from './Component/FormBox';

import NavBar from './Component/NavBar';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
          <NavBar />
          <Title/>
          <FormBox/>
          <Tutorials />
      </div>
    </Router>
  );
}

export default App;
