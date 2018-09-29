import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NewComp name={this.props.name} />
      </div>
    );
  }
}

class NewComp extends React.Component {
  render() {
    return (
      <div class="container p-3 bg-light">
        Hello {this.props.name}
      </div>
    );
  }
}



export default App;
