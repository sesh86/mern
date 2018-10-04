import React,{Component} from 'react';
import axios from 'axios';
import {Link , NavLink,withRouter} from 'react-router-dom';

class Users extends Component {
  constructor(props){
    super(props);
    this.state={users:[]}
  }
  componentDidMount(){
    axios('https://jsonplaceholder.typicode.com/users')
    .then(res=>{console.log(res);this.setState({users:res.data})});
  }
  render(){
    return (
      <div className="container">
      <table className="table">
        <thead><tr><th>User Id</th><th>Name</th><th>Email</th><th>Phone</th></tr></thead>
        <UserDetails users={this.state.users}></UserDetails>
      </table>
    </div>)
  }
}

const UserDetails =(props)=>{
  return (<tbody>
      {props.users.map(user => (
        <tr className="text-left" key={user.id}><td><NavLink className="btn btn-info" to={"/Posts/"+user.id+"/"+user.name}>{user.id}</NavLink></td><td>{user.name}</td><td>{user.email}</td><td>{user.phone}</td></tr>
      ))}
      </tbody>);

}
export default Users;
