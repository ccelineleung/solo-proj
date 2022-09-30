import React, { useState } from 'react';
import { initializeConnect } from 'react-redux/es/components/connect';
// import ReactDOM from 'react-dom/client';
import Form from './Form';
import SavedData from './SavedData';
import TotalMonthlyFee from './TotalFee';

function CalculatorInput({ userName }) {
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

  const saveDatatoDatabase = async () => {
    const body = {
      homeValue: homeValue,
      downPayment: downPayment,
      loanAmount: loanAmount,
      interestRate: interestRate,
      loanTerm: loanTerm,
      monthlyPayment: monthlyPayment,
      username: userName,
    };
    try {
      console.log(body.username);
      //   const {e.target[0].value, e.target[1].value} = body;
      //   body.username = e.target[0].value
      const res = await fetch(`http://localhost:5000/data`, {
        method: 'POST',
        headers: { 'Content-Type': 'Application/JSON' },
        body: JSON.stringify(body),
      });
      const data = await res.json();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className='charContainer'>
      <form className='formCalLeft' onSubmit={(e) => e.preventDefault()}>
        <h1>Mortgage Calculator</h1>
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
        <select className='dropbtn' onChange={handleTerm}>
          <option className='dropdown-content' value='30'>
            30-Years Fixed
          </option>
          <option value='25'>25-Years Fixed</option>
          <option value='15'>15-Years Fixed</option>
        </select>

        <h2 className='monthlypayment'>
          Monthly Payment {formatter.format(monthlyPayment)}
        </h2>
        <button className='buttonCal' onClick={calculateMonthlyPayment}>
          Calculate
        </button>
        <button
          className='buttonCal'
          type='submit'
          onClick={saveDatatoDatabase}
        >
          Save
        </button>
      </form>
      <form className='formCalRight '>
        <TotalMonthlyFee
          monthlyPayment={monthlyPayment}
          setMonthlyPayment={setMonthlyPayment}
        />
      </form>
      <SavedData userName={userName} />
    </div>
  );
}

export default CalculatorInput;
