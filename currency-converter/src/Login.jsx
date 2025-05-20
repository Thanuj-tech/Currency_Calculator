// src/Login.jsx
import React, { useState } from 'react';
import { auth } from './firebase';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      alert('Please enter both email and password.');
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Login Successful ✅');
      window.location.href = '/dashboard';
    } catch (error) {
      alert('Login Failed ❌\n' + error.message);
    }
  };

  const forgotPassword = async () => {
    if (!email) {
      alert('Enter your email first');
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      alert('✅ Reset email sent');
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">Welcome Back</h2>

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

      <div className="flex items-center justify-between mb-6">
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <span className="text-sm text-gray-600">Remember me</span>
        </label>
        <button
          className="text-blue-600 hover:underline text-sm"
          onClick={forgotPassword}
        >
          Forgot Password?
        </button>
      </div>

      <button
        onClick={handleLogin}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition duration-300"
      >
        LOGIN
      </button>

      <p className="text-sm text-center text-gray-600 mt-4">
        Don't have an account?{' '}
        <Link to="/" className="text-blue-600 hover:underline">
          Sign up here
        </Link>
      </p>
    </div>
  );
}

export default Login;
