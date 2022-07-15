import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Nav from './Nav';
import Login from './Login';
import Main from './Main';
import Days from './Days';
import Meals from './Meals';
import Goals from './Goals';
import Weight from './Weight';
import Error404 from  './Error404';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<><Nav /><Main /></>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/days" element={<><Nav /><Days /></>} />
      <Route path="/meals" element={<><Nav /><Meals /></>} />
      <Route path="/goals" element={<><Nav /><Goals /></>} />
      <Route path="/weight" element={<><Nav /><Weight /></>} />
      <Route path="*" element={<><Nav /><Error404 /></>} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
