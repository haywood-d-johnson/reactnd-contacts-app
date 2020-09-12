import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const appRoot = document.getElementById('root');
ReactDOM.render(
    <BrowserRouter >
        <App />
    </BrowserRouter>, appRoot);

registerServiceWorker();
