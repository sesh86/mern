import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state={name:""}

handleChange = (e)=>{this.setState({name:e.target.value })}

// handleChange(e){this.setState({name:e.target.value}

componentDidCatch(){console.log('componentDidCatch');}

  render() {
    return (
      <div className="p-3 bg-light d-line">
        <NewComp name={this.state.name} />
        <input type="text" onChange={this.handleChange}/>
      </div>
    );
  }
}

class NewComp extends React.Component {

  constructor(props){
    super(props);
    console.log('constructor');
    this.state={sec:0}
  }

  componentWillMount(){console.log('componentWillMount')}

  tick =()=> {this.setState(state => ({sec: this.state.sec + 1}));console.log(this.state.sec);}

  render() {
    this.interval = setInterval(()=>this.tick(),1000);
    console.log('render');
    return (
      <div><ChildComp name={this.props.name}/>Hello {this.props.name}<br/><div>{this.state.sec}</div></div>
    );
  }

  componentDidMount(){console.log('componentDidMount')}

  shouldComponentUpdate(props,state){console.log('shouldComponentUpdate',props,state);return props.name.length>3}

  componentWillReceiveProps(props,state){console.log('componentWillReceiveProps',props,state)}

  componentWillUpdate(props,state){console.log('componentWillUpdate',props,state)}

  // getSnapshotBeforeUpdate(props,state){console.log('getSnapshotBeforeUpdate',props,state);return false;}

  componentDidUpdate(){console.log('componentDidUpdate');}

  componentDidCatch(){console.log('componentDidCatch');}

  componentWillUnmount(){clearInterval(this.interval);console.log('componentWillUnmount');}

}

const ChildComp =()=>{console.log('Child Component');return <span></span>}
//
const Skyblue = (WrapperComp)=>{
  return (props) => {
    return <div className="text-info">
      <WrapperComp {...props} />
    </div>
  }
}

export default Skyblue(App);
