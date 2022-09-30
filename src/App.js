// import React from 'react';

// import ReactDOM from 'react-dom/client';
// // import './App.css';
// import CalculatorInput from './component/CalculatorInput';

// function App() {

//   return (
//     <div className='App'>
//       <header className='App-header'>
//         <h1>Mortgage Calculator</h1>
//       </header>
//       <CalculatorInput />

//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';

//import ReactDOM from 'react-dom';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
//import CalculatorInput from './component/CalculatorInput';
import CalculatorInput from './component/CalculatorInput';
import Login from './component/Login';

function App() {
  const [userName, setUsername] = useState('');
  
  return (
    <>
      <Routes>
        <Route path='/calculator' element={<CalculatorInput userName={userName}/>} />
        <Route path='/' element={<Login setUsername={setUsername}/>} />
        
      </Routes>
    </>
  );
}

export default App;
