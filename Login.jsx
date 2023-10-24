import React, { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', { email, password })
      .then((result) => {
        console.log(result)
        if(result.data === "Success"){
            navigate('/Home')
      }
  })
  .catch((err) => console.log(err));
}

  return (
    <div className='container'>

    <form onSubmit={handleSubmit}>
      <h3>Login</h3>
    
      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          onChange={(e) => setPass(e.target.value)}
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </div>
      <p className="forgot-password text-right">Already Have an Account</p>
      <Link to="/Register" className="btn btn-primary">
        Sign Up
      </Link>
    </form>
    </div>
  );
}

export default Login;
