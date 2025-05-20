// src/Signup.jsx
import React, { useState } from 'react';
import { auth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match ❌');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Signup successful! ✅');
      window.location.href = '/login';
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Email</label>
        <input
          type="email"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@email.com"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Password</label>
        <input
          type="password"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Confirm Password</label>
        <input
          type="password"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Re-enter password"
        />
      </div>

      <div className="flex items-center justify-between mb-6">
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <span className="text-sm text-gray-600">I agree to terms</span>
        </label>
        <Link to="/login" className="text-blue-600 hover:underline text-sm">
          Already have an account?
        </Link>
      </div>

      <button
        onClick={handleSignup}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition duration-300"
      >
        SIGNUP
      </button>
    </div>
  );
}

export default Signup;
