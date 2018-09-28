import React, { Component } from 'react';
class Timer extends React.Component {
  constructor(props) {
    super(props);//it is essential to use super function before using this keyword
    this.state = { seconds: 0 };

  }

  tick() {
    this.setState(state => ({seconds: state.seconds + 1}));
    //this.props.name=this.state.seconds;
  }

//called on mount - the callback function runs every second
  componentDidMount() {
    //this.tick();
    this.interval = setInterval(() => this.tick(), 1000);
  }

  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }

  render() {
    return (
      <div>Seconds: {this.state.seconds}</div>//components state will be displayed
    );
  }
}
export default Timer;
