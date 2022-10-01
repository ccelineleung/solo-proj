// import { Alert } from 'bootstrap';
import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/alert';

// import ReactDOM from 'react-dom/client';
// import './App.css';

function Login({ setUsername }) {
  const navigate = useNavigate();
  // const click = () => {
  //   navigate('/calculator');
  // };

  const onSubmitSignup = async (e) => {
    e.preventDefault();
    const body = { username: e.target[0].value, password: e.target[1].value };
    //   console.log(document.querySelector('#username-input').value);
    console.log('username', body.username);
    if (body.username === '' || body.password === '') {
      alert('username or password cannot be empty!');
      return;
    }
    try {
      //   const {e.target[0].value, e.target[1].value} = body;
      //   body.username = e.target[0].value
      const res = await fetch(`http://localhost:5000/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'Application/JSON' },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      console.log(data);
      if (data.status === true) {
        setUsername(body.username);

        navigate('/calculator');
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const onSubmitLogin = async (e) => {
    const body = { username: e.target[0].value, password: e.target[1].value };
    //   console.log(document.querySelector('#username-input').value);
    // console.log('username', body.username === '');
    if (body.username === '' || body.password === '') {
      return alert('username or password cannot be empty!');
      // return (
      // <Alert key={danger} variant={danger}>
      //   This is a danger alert with{' '}
      //   <Alert.Link href='#'>an example link</Alert.Link>. Give it a click if
      //   you like.
      // </Alert>
      //   );
    }

    e.preventDefault();
    try {
      const body = { username: e.target[0].value, password: e.target[1].value };
      const res = await fetch(`http://localhost:5000/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'Application/JSON' },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      console.log(data);
      if (data.status === true) {
        setUsername(body.username);
        navigate('/calculator');
      } else {
        // <Alert> Wrong Password! </Alert>;
        alert('Wrong password');
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  //   const alertMessage = () => {

  //   }

  return (
    <div className='login-page'>
      <form className='form' onSubmit={onSubmitLogin}>
        <h2>Login</h2>
        <input
          className='formInput'
          name='username'
          type='text'
          placeholder='username'
        ></input>
        <input
          className='formInput'
          name='password'
          type='password'
          placeholder='password'
        ></input>
        <input className='button' type='submit' value='Submit' />
      </form>
      <form className='form' onSubmit={onSubmitSignup}>
        <h2>Registration</h2>
        <input
          className='formInput'
          id='username-input'
          name='username'
          type='text'
          placeholder='username'
          //   onChange={(e) => {
          //     setUsernameReg(e.target.value);
          //   }}
        ></input>
        <input
          className='formInput'
          name='password'
          type='password'
          placeholder='password'
          //   onChange={(e) => {
          //     setpasswordReg(e.target.value);
          //   }}
        ></input>
        <input className='button' type='submit' value='Register'></input>
      </form>
      {/* <button onClick={click}>Click</button> */}
    </div>
  );
}

export default Login;
