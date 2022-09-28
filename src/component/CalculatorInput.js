import React, { useState } from 'react';
import { initializeConnect } from 'react-redux/es/components/connect';
// import ReactDOM from 'react-dom/client';
import Form from './Form';

function CalculatorInput() {
  const [homeValue, setHomeValue] = useState('');
  // const [downPayment, setDownPayment] = useState(
  //   homeValue * (downPaymentRate / 100)
  // );
  const [downPayment, setDownPayment] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [loanTerm, setLoanTerm] = useState(30);

  const calculateLoanAmount = () => {
    setLoanAmount(homeValue - downPayment);
    return loanAmount;
  };

  function calculateMonthlyPayment() {
    function percentageToDecimal(percent) {
      return percent / 12 / 100;
    }

    function YTM(year) {
      return year * 12;
    }

    setMonthlyPayment(
      percentageToDecimal(interestRate * loanAmount) /
        (1 - Math.pow(1 + percentageToDecimal(interestRate), -YTM(loanTerm)))
    );

    return monthlyPayment;
  }

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFactionDigits: 2,
  });

  const handleTerm = (e) => {
    setLoanTerm(e.target.value);
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <Form
          text='Home Value'
          onKeyUp={calculateLoanAmount}
          value={homeValue}
          onInput={(e) => setHomeValue(e.target.value)}
        />
        <Form
          text='Down Payment'
          onKeyUp={calculateLoanAmount}
          value={downPayment}
          onInput={(e) => setDownPayment(e.target.value)}
        />
        <Form text='Loan Amount' readOnly={true} value={loanAmount} />
        <Form
          text='Interest Rate'
          value={interestRate}
          onInput={(e) => setInterestRate(e.target.value)}
        />

        <label>Loan Term</label>
        <select onChange={handleTerm}>
          <option value='30'>30-Years Fixed</option>
          <option value='25'>25-Years Fixed</option>
          <option value='15'>15-Years Fixed</option>
        </select>
      </form>
      {/* <div className='optionalSeclection'>
        <Form text='Property tax per month' />
        <Form text="Homeowner's insurance per month" />
        <Form text='PMI per month' />
        <Form text='HOA fees per month' />
      </div> */}
      <h4 className='alert alert-info fw-bold'>
        Monthly Payment :{formatter.format(monthlyPayment)}
      </h4>
      <button type='submit' onClick={calculateMonthlyPayment}>
        Calculate
      </button>
    </>
  );
}

export default CalculatorInput;