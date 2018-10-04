import React,{Component} from 'react';
import axios from 'axios';

class Posts extends Component {
  constructor(props){
    super(props);
    this.state={posts:[]}
    console.log('TodoAll');
  }
  componentDidMount(){
    axios('https://jsonplaceholder.typicode.com/posts?userId='+this.props.match.params.id)
    .then(res=>{console.log(res);this.setState({posts:res.data})});
  }
  render(){
    return (
      <div className="container">
        <h2>Posts of {this.props.match.params.name}</h2>
      <table className="table">
        <thead><tr><th>Id</th><th>Title</th><th>Posts</th></tr></thead>
        <Post posts={this.state.posts}></Post>
      </table>
    </div>)
  }
}

const Post =(props)=>{
  return (<tbody>
      {props.posts.map(post => (
        <tr className="text-left" key={post.id}><td>{post.id}</td><td>{post.title}</td><td>{post.body}</td></tr>
      ))}
      </tbody>);

}
export default Posts;
