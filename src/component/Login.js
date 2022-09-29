import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

// import ReactDOM from 'react-dom/client';
// import './App.css';

function Login() {
  const navigate = useNavigate();
  const click = () => {
    navigate('/calculator');
  };

  return (
    <>
      <h2>Login</h2>
      <form method='POST' action='/login'>
        <input name='username' type='text' placeholder='username'></input>
        <input name='password' type='password' placeholder='password'></input>
        <input type='submit' value='login' />
      </form>
      <h2>Signup</h2>
      <form method='POST' action='/signup'>
        <input name='username' type='text' placeholder='username'></input>
        <input name='password' type='password'></input>
        <input type='submit' value='create user'></input>
      </form>
      <button onClick={click}>Click</button>
    </>
  );
}

export default Login;

{
  /* <div className='App'>
<header >
  <h1>Mortgage Calculator</h1>
</header>
<CalculatorInput />

</div> */
}
