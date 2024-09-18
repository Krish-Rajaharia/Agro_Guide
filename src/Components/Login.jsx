// src/Components/Login.jsx

import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profession, setProfession] = useState(""); // New state for profession

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Profession:", profession); // Log profession
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-100">
      {/* Add the logo and center it */}
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        
        {/* Logo at the top */}
        <div className="flex justify-center mb-6">
          <img src="./assets/4.svg" alt="logo" className="h-16 w-auto" />
        </div>
        
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Profession Selector */}
          <div>
            <label className="block text-gray-700">Select Profession</label>
            <select
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            >
              <option value="" disabled>Select your profession</option>
              <option value="Farmer">Farmer</option>
              <option value="Retailer">Retailer</option>
            </select>
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Login
          </button>
        </form>

        {/* Footer text */}
        <p className="text-gray-600 mt-4 text-center">
          Don't have an account? <a href="#" className="text-blue-500">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
