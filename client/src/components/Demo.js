import React, { Component } from 'react';

class Demo extends Component {
  state={name:"Sesh",age:20,gender:'Male'}

  render() {
    return (
      <div className="p-3 bg-light d-line">
        <div>Gender={this.state.gender}</div>
        <EmpTbl name={this.state.name} age={this.state.age}></EmpTbl>
      </div>
    );
  }
}
const EmpTbl=(props)=>{
  return  <div>{props.name=='Sesha'?<div>name={props.name}</div>:''}<div>age={props.age}</div></div>
}

export default Demo;
