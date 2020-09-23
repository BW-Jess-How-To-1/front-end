import React from 'react';
import Title from './Component/Header';
import Tutorials from './Component/Tutorial';
import './App.css';
import FormBox from './Component/FormBox';

function App() {
  return (
    <div className="App">
        <Title/>
        <FormBox/>
        <Tutorials />
    </div>
  );
}

export default App;
