import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FooterExample from './components/FooterExample';

import AppBarExample from './components/AppBarExample';

const root = ReactDOM.createRoot(document.getElementById('root'));
const imgurl='https://initiate.alphacoders.com/images/102/cropped-1600-900-1028709.jpg?8838';
root.render(
    <div>
    <AppBarExample  />
    <div><App /></div>
    
    </div>
    

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
