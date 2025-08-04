import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../store/store';

function Login() {
  const { login, user } = useAuth();
  const navigate = useNavigate();
  const [userData, setUserData] = useState("");
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(data);
      setUserData(response);

      if (response && response.success) {
        navigate('/'); // navigate to home page on successful login
      } else {
        console.error('Login failed:', response.message);
      }
    } catch (error) {
      console.error('Login error:', error);
    }

    console.log(user);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-6">
      <form 
        onSubmit={handleSubmit} 
        className="card w-full max-w-md bg-base-100 shadow-xl p-8 rounded-lg"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <label htmlFor="email" className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={data.email}
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
          placeholder="Enter your password"
          value={data.password}
          onChange={handleChange}
          required
          className="input input-bordered w-full mb-6"
        />

        <button type="submit" className="btn btn-primary w-full">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
