import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './routes/Home';
import CalculatorLink from './routes/CalculatorLink';
import Qoute from './routes/Quote';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="calculator" element={<CalculatorLink />} />
      <Route path="quote" element={<Qoute />} />
    </Routes>
  </BrowserRouter>,
);
