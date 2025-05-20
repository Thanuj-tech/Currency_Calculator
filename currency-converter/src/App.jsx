// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import CurrencyConvertor from "./components/currency-convertor";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <div className="container max-w-lg p-4">
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<CurrencyConvertor />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
