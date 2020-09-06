import React, { useState } from 'react';
import Form from './components/Form';
import './App.css';
import Display from './components/Display';

function App() {
  const [ state, setState ] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpw: ""
  });
  
  return (
    <div className="App">
      <Form inputs={state} setInputs={setState} /> 
      <Display data={state} />    
    </div>
  );
}

export default App;
