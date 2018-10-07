import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import Timer from './components/Timer';
import TodoApp from './components/ToDo';
import EmpList from './components/EmpList';
import NavBar from './components/NavBar';
import Posts from './components/Posts';
import Users from './components/Users'
import {BrowserRouter, Route} from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer'


const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  <div className="App">
    <NavBar/>

    <Route exact path="/" component={App} name="sesh"/>
    <Route exact path="/" component={Timer}/>
    <Route exact path="/" component={TodoApp}/>
    <Route exact path="/" component={EmpList}/>

    <Route path="/Timer" component={Timer}/>
    <Route path="/Todo" component={TodoApp}/>
    <Route path="/Posts/:id/:name" component={Posts}/>
    <Route path="/Users" component={Users}/>
    <Route path="/EmpList" component={EmpList}/>
  </div>
  </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
