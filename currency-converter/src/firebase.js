// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAH5NzYEHMRwGEwUEfBnkoVi91XvkhrPe8",
  authDomain: "thanuj-login.firebaseapp.com",
  projectId: "thanuj-login",
  storageBucket: "thanuj-login.firebasestorage.app",
  messagingSenderId: "231160342842",
  appId: "1:231160342842:web:d373ed4d5efbf55ed6c803"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);