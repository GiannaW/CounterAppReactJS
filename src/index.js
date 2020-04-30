import React from 'react';
import ReactDOM from "react-dom";
//import "./index.css";
import App from './App.js';
//import registerServiceWorker from './registerServiceWorker';
import Counters from './components/counters';

import 'bootstrap/dist/css/bootstrap.css';


// ReactDOM.render(<C/>, document.getElementById('root'));






// const element = <h1>Hello World</h1>;

// console.log(element);

ReactDOM.render(<Counters/>, document.getElementById('root'));