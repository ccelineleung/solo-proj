import React from 'react';
import DoughnutChart from './charts/Doughnut';
// import ReactDOM from 'react-dom/client';
// import './App.css';
import CalculatorInput from './component/CalculatorInput';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Mortgage Calculator</h1>
      </header>
      <CalculatorInput />
      <DoughnutChart />
    </div>
  );
}

export default App;
