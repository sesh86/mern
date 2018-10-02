import React,{Component} from 'react';
class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }
  // removeTodo(e){this.setState(state=>({items:this.state.items.filter(e1=>e1!==e)}));}

  removeTodo(name){
      this.setState({
          items: this.state.items.filter(e => e !== name)
      })
  }
  // <TodoList items={this.state.items} />//sets the property with the state value of the parent
  render() {
    return (
      <div className="bg-info p-5 ">
        <h3 className="text-white">TODO</h3>
        <div className="card">
          <div className="card-header">
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="new-todo">
                What needs to be done?
              </label>
              <div className="row ">
                  <div className="mx-auto">
                    <div className="input-group">
                    <input className="input-group-addon"
                      id="new-todo"
                      onChange={this.handleChange}
                      value={this.state.text}
                    />
                    <button className="input-group-addon">
                      Add #{this.state.items.length + 1}
                    </button>
                    </div>
                  </div>
                </div>
            </form>
          </div>
          <div className="card-body"><TodoList items={this.state.items} removeTodo={this.removeTodo}/></div>
          <div className="card-footer text-muted">Click on the Item to Delete</div>
      </div>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();//to prevent default action on submit
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

const TodoList =(props)=>{
  return (
    <div className="row">
    {props.items.length>0 ? "" :<div className="col-12 m-5 mx-auto">Add Items to your ToDo List</div>}
    <ul className="list-group-mb5 text-left col-sm-10 col-md-4 mx-auto">
      {props.items.map(item => (
        <li key={item.id} title="Click to Delete" onClick={() => { props.removeTodo(item)}} className="list-group-item hstrike link">{item.text}</li>
      ))}
    </ul>
    </div>
  );
}

export default TodoApp;
