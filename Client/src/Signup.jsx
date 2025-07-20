import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Signup = ({ onLoginClick }) => {
    const [name,setName]=useState();
  const [email,setEmail]=useState();
  const [password,setPassowrd]=useState();
  const navigate=useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/register',{name,email,password})
    .then(result=>{console.log(result)
      navigate('/login')
    }
  )

    .catch(err=>console.log(err)
    )
   
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '500px' }}>
      <h2 className="mb-4">Sign Up</h2>
      {/* {message && <div className="alert alert-info">{message}</div>} */}
      <form onSubmit={handleSubmit}>
   
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            // value={form.name}
            // onChange={handleChange}
              onChange={(e)=>setName(e.target.value)}
            required
            placeholder="Enter your name"

          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            // value={form.email}
            // onChange={handleChange}
            onChange={(e)=>setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            // value={form.password}
            // onChange={handleChange}
            onChange={(e)=>setPassowrd(e.target.value)}
            required
            placeholder="Create a password"
          />
        </div>

        <button type="submit" className="btn btn-primary w-100 mb-3">
          Sign Up
        </button>
      </form>

      <Link to="/login"
        className="btn btn-secondary w-100"
       
        type="button"
      >
        Login
      </Link>
   
    </div>
   
  );
};

export default Signup;
