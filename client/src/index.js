import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Timer from './Timer';
import TodoApp from './ToDo';

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<div><App name="sesh"/><Timer name="5"/><TodoApp/></div>, document.getElementById('root'));
registerServiceWorker();
