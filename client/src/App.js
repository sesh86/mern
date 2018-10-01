import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state={name:""}

  handleChange = (e)=>{this.setState({name:e.target.value })}

  render() {
    return (
      <div className="container p-3 bg-light d-line">
        <NewComp name={this.state.name} />
        <input type="text" onChange={this.handleChange}/>
      </div>
    );
  }
}

class NewComp extends React.Component {
  render() {
    return (
      <div>
        Hello {this.props.name}
      </div>
    );
  }
}



export default App;
