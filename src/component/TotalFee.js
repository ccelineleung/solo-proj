import React, { useState } from 'react';
import Form from './Form';

const TotalMonthlyFee = () => {
  const [propertyTax, setPropertyTax] = useState(0);
  const [homeInsur, setHomeInsur] = useState(0);
  const [PMIFee, setPMIFee] = useState(0);
  const [HOAFee, setHOAFee] = useState(0);
  const [FinalMonsPayment, setFinalMonsPayment] = useState(0);

  function totalFee() {
    setFinalMonsPayment(
      Number(propertyTax) + Number(homeInsur) + Number(PMIFee) + Number(HOAFee)
    );
    return FinalMonsPayment;
  }

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFactionDigits: 2,
  });

  return (
    <div className='optionalSeclection'>
      <Form
        text='Property tax per month'
        value={propertyTax}
        onKeyUp={totalFee}
        onInput={(e) => setPropertyTax(e.target.value)}
      />
      <Form
        text="Homeowner's insurance per month"
        value={homeInsur}
        onKeyUp={totalFee}
        onInput={(e) => setHomeInsur(e.target.value)}
      />
      <Form
        text='PMI per month'
        value={PMIFee}
        onKeyUp={totalFee}
        onInput={(e) => setPMIFee(e.target.value)}
      />
      <Form
        text='HOA fees per month'
        value={HOAFee}
        onKeyUp={totalFee}
        onInput={(e) => setHOAFee(e.target.value)}
      />
      <h4>Total Monthly Payment : {formatter.format(FinalMonsPayment)}</h4>
    </div>
  );
};

export default TotalMonthlyFee;
