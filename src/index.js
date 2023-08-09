import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import axios from 'axios'

axios.defaults.baseURL = "";
axios.defaults.withCredentials = true;

const onLogin = (email, password) => {
  const data = {
    email,
    password,
  };
  axios.post('/login', data).then(response => {
    const { accessToken } = response.data;

    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  }).catch(error => {
    console.error(error)
  })
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
