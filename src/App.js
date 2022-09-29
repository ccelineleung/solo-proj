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

import React from 'react';

//import ReactDOM from 'react-dom';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
//import CalculatorInput from './component/CalculatorInput';
import CalculatorInput from './component/CalculatorInput';
import Login from './component/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path='/calculator' element={<CalculatorInput />} />
        <Route path='/' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
