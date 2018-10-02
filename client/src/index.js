import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Timer from './components/Timer';
import TodoApp from './components/ToDo';
import EmpList from './components/EmpList';
import NavBar from './components/NavBar';
import {BrowserRouter, Route} from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <BrowserRouter>
  <div className="App">
    <NavBar/>
    <Route exact path="/" component={App} name="sesh"/>
    <Route exact path="/" component={Timer}/>
    <Route exact path="/" component={TodoApp}/>
    <Route exact path="/" component={EmpList}/>

    <Route path="/Timer" component={Timer}/>
    <Route path="/Todo" component={TodoApp}/>
    <Route path="/EmpList" component={EmpList}/>
  </div>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
