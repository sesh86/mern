import React from 'react';
class TodoApp extends React.Component {
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
      <div className="container bg-info p-5 ">
        <h3>TODO</h3>
        <TodoList items={this.state.items} removeTodo={this.removeTodo}/>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <div className="row ">
              <div className="mx-auto">
                <div className="input-group">
                <input
                  id="new-todo"
                  onChange={this.handleChange}
                  value={this.state.text}
                />
                <span  >
                <button className="input-group-addon">
                  Add #{this.state.items.length + 1}
                </button>
                </span>
                </div>
              </div>
            </div>
        </form>
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

class TodoList extends React.Component {
  removeItem(p_item) {
      this.props.removeTodo(p_item);
  }

  // This syntax ensures `this` is bound within handleClick
  //onClick={() => { this.removeItem(todo)}}
  render() {
    return (
      <div className="row">
      {this.props.items.length>0 && <div className="text-light col-10 mx-auto" >Click on the item to remove</div>}
      <ul className="list-group-mb5 text-left col-sm-10 col-md-4 mx-auto">
        {this.props.items.map(item => (
          <li key={item.id} onClick={() => { this.removeItem(item)}} className="list-group-item">{item.text}<a onClick={() => { this.removeItem(item)}} className="text-right float-right text-danger">X</a></li>
        ))}
      </ul>
      </div>
    );
  }
}

export default TodoApp;
