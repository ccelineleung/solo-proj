import React, { useState } from 'react';

function SavedData({ userName }) {
  const [userData, setUserData] = useState([]);

  const getUserDataList = async () => {
    const body = {
      username: userName,
    };
    try {
      const res = await fetch(`http://localhost:5000/userdata`, {
        method: 'POST',
        headers: { 'Content-Type': 'Application/JSON' },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      setUserData(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFactionDigits: 2,
  });

  return (
    <div className='formData'>
      <button className='buttonCal' onClick={getUserDataList}>
        History
      </button>
      <table className='styled-table'>
        <thead>
          <tr>
            <th>HOME VALUES</th>
            <th>DOWN PAYMENT</th>
            <th>LOAN AMOUNT</th>
            <th>INTEREST RATE</th>
            <th>LOAN TERM</th>
            <th>PAYMENT</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((data) => (
            <tr>
              <td>{formatter.format(data.homevalue)}</td>
              <td>{formatter.format(data.downpayment)}</td>
              <td>{formatter.format(data.loanamount)}</td>
              <td>{data.interestrate}</td>
              <td>{formatter.format(data.loanterm)}</td>
              <td>{formatter.format(data.payment)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SavedData;
