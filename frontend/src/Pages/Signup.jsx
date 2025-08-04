import React, { useState } from 'react';
import useAuth from '../../store/store';
import { Link } from 'react-router-dom';
function Signup() {
  const { signup, user } = useAuth();
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    cuponCode: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signup(data)
      .then(response => {
        console.log("Signup successful:", response);
      })
      .catch(error => {
        console.error("Signup failed:", error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
      <form 
        onSubmit={handleSubmit} 
        className="card w-full max-w-md bg-base-100 shadow-xl p-6 rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        <label htmlFor="email" className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="email@example.com"
          value={data.email}
          onChange={handleChange}
          required
          className="input input-bordered w-full mb-4"
        />

        <label htmlFor="name" className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          name="name"
          placeholder="Your full name"
          value={data.name}
          onChange={handleChange}
          required
          className="input input-bordered w-full mb-4"
        />

        <label htmlFor="password" className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          name="password"
          placeholder="********"
          value={data.password}
          onChange={handleChange}
          required
          className="input input-bordered w-full mb-4"
        />

        <label htmlFor="cuponCode" className="label">
          <span className="label-text">Coupon Code</span>
        </label>
        <input
          type="text"
          name="cuponCode"
          placeholder="Optional coupon code"
          value={data.cuponCode}
          onChange={handleChange}
          className="input input-bordered w-full mb-6"
        />

        <button type="submit" className="btn btn-primary w-full">
          Sign Up
        </button>
         <p className='mt-2'>
            Already have a account:<Link to="/login" className='text-blue-500'>Log In</Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
