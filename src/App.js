import React from 'react';
// import DoughnutChart from './charts/Doughnut';
import ReactDOM from 'react-dom/client';
// import './App.css';
import CalculatorInput from './component/CalculatorInput';
//import TotalMonthlyFee from './component/TotalFee';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Mortgage Calculator</h1>
      </header>
      <CalculatorInput />
      {/* <DoughnutChart /> */}
      {/* <TotalMonthlyFee /> */}
    </div>
  );
}

export default App;
