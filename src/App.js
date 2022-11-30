import React, { useState } from 'react';
//import ReactDOM from 'react-dom';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
//import CalculatorInput from './component/CalculatorInput';
import CalculatorInput from './component/CalculatorInput';
import Login from './component/Login';
import Signup from './component/Signup';

function App() {
  const [userName, setUsername] = useState('');
  
  
  return (
    <>
      <Routes>
        <Route path='/calculator' element={<CalculatorInput userName={userName}/>} />
        <Route path='/' element={<Login setUsername={setUsername}/>} />
        <Route path='/signup' element={<Signup setUsername={setUsername}/>} />
      </Routes>
    </>
  );
}

export default App;
