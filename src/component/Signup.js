import React from 'react';
import { Navigate, useNavigate, Link } from 'react-router-dom';


function Signup({setUsername}) {
    const navigate = useNavigate();

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

    return (<>
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
        <Link to='/'>Already have account? Log in now</Link>
      </form>
    </>)
}

export default Signup;