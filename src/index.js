import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Parent from './components/parent/Parent';
import LifeCycleDemo from './components/lifeCycleDemo/LifeCycleDemo';
import ApiCallDemo from './components/apiCallDemo/ApiCallDemo';

import UseEffectDemo from './components/functionDemo/UseEffectDemo';
import Call from './components/functionDemo/Call';
import FormDemo from './components/FormDemo/FormDemo';
import Printing from './components/functionDemo/Printing';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Parent />
    
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
