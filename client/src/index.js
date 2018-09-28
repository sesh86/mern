import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HelloMessage from './App';
import NewComp from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App name="Sesh" />, document.getElementById('root'));
registerServiceWorker();
