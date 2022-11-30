import React, { useState } from 'react';


function SavedData({ userName }) {
  const [userData, setUserData] = useState([]);
  console.log(`userData`, userData)
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
      // console.log(data)
      setUserData(data);
      console.log(userData)
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteDatafromDB = async () => {
    const body = {
      username: userName,
      home_id: id,
    };
    console.log(`home_id`,home_id)
    try {
      const res = await fetch(`http://localhost:5000/userdata`, {
        method: 'DELETE',
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
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((data) => (
            <tr>
              <td>{formatter.format(data.homevalue)}</td>
              <td>{formatter.format(data.downpayment)}</td>
              <td>{formatter.format(data.loanamount)}</td>
              <td>{data.interestrate}</td>
              <td>{data.loanterm}</td>
              <td>{formatter.format(data.payment)}</td>
              <td><button id={data.id} onClick={deleteDatafromDB}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SavedData;
