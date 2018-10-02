import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Timer from './Timer';
import TodoApp from './ToDo';
import EmpList from './EmpList';

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<div className="App"><App name="sesh"/><Timer name="5"/><TodoApp/><EmpList/></div>, document.getElementById('root'));
registerServiceWorker();
