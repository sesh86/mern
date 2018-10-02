import React, { Component } from 'react';
class Timer extends Component {
  constructor(props) {
    super(props);//it is essential to use super function before using this keyword
    this.state = { seconds: 0,disableStart:true,disablePause:true};
    // this.pauseTime = this.pauseTime.bind(this);
    // this.resumeTime = this.resumeTime.bind(this);
    this.stop = this.stop.bind(this);
  }

  //called on mount - the callback function runs every second
  componentDidMount() {this.resumeTime();}

  componentWillUnmount(){this.pauseTime();console.log('componentWillUnmount Timer');}
  // componentDidMount() {this.resumeTime();setTimeout(()=>{this.props.history.push('/')},2020);}

  resumeTime() {this.disableButton(true,false,false);this.interval = setInterval(() => this.tick(), 1000);}

  tick() {this.setState(state => ({seconds: state.seconds + 1}));}

  stop() {this.pauseTime();this.disableButton(false,true,true);this.setState(state => ({seconds: 0}));}

  pauseTime = () => {clearInterval(this.interval);this.disableButton(false,true,true);}

  disableButton(p_start,p_pause,p_stop){this.setState(state=>({disableStart:p_start,disablePause:p_pause,disableStop:p_stop}));}

 /*<div class="container bg-secondary p-3">Seconds: {this.state.seconds}</div>//components state will be displayed*/
  render() {
    return (
      <div className="bg-secondary p-5">
        <h4 className="text-white">Timer</h4>
        <div className="card">
          <div className="card-header">
            <div>Seconds: {this.state.seconds}</div>
          </div>
          <div className="card-body m-3">
            <button className="btn m-1" onClick={()=>this.resumeTime()} disabled={this.state.disableStart}>Start</button>
            <button className="btn m-1" onClick={this.pauseTime} disabled={this.state.disablePause}>Pause</button>
            <button className="btn m-1" onClick={this.stop} disabled={this.state.disableStop}>Clear</button>
          </div>
          <div className="card-footer text-muted">Use the buttons to control the timer</div>
        </div>
      </div>
    );
  }
}
export default Timer;
