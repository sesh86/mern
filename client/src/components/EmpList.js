import React,{Component} from 'react';
import { connect } from 'react-redux'
import {addName,addDesignation,addEmp,delEmp} from '../reducers/actions'

class EmpList extends Component {
  constructor(props){
    super(props)
    this.inputName = React.createRef();
  }

  handleChange=(e)=>{
    if(e.target.id==='name') this.props.addName(e.target.value);
    if(e.target.id==='designation') this.props.addDesignation(e.target.value);
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    this.props.addEmp(this.props.state.name,this.props.state.designation)
    this.inputName.current.focus();
  }

  render(){
    const { state } = this.props;
    return(
    <div className="bg-warning p-5">
      <h4 className="text-white p-3">Employee List</h4>
      <div className="card bg-dark mx-auto">
        <div className="card-header">
          <div className="row">
          <div className="mx-auto">
            <form className="input-group mx-auto" onSubmit={this.handleSubmit}>
              <input ref={this.inputName} className="input-group-addon" placeholder="Name" id="name" type="text" value={state.name} onChange={this.handleChange}/>
              <input className="input-group-addon" placeholder="Designation" id="designation" value={state.designation} type="text" onChange={this.handleChange} />
              <button className="btn-danger link btn">Add Employees</button>
            </form>
          </div>
          </div>
        </div>
        <EmpTbl empList={state.empList} delEmp={this.props.delEmp}></EmpTbl>
        <div className="card-footer text-muted">Click on the Employee to remove from the list</div>
      </div>
    </div>
  );
  }
}

const EmpTbl=(props)=>{
  return <div className="row">
    {
      props.empList.length > 0 ?
      <div className="card-body container mx-auto m-3">
        <div className="row mx-auto">
          <table className="bg-dark text-white text-left table mt-1 table-striped bg-light mx-auto col-md-6 width:100%">
          <thead><tr><th>Name</th><th>Designation</th></tr></thead>
          <tbody>
            {props.empList.map((emp)=><tr className="link hstrike" title="Click to Delete" onClick={()=>props.delEmp(emp)} key={emp.name}><td>{emp.name}</td><td>{emp.designation}</td></tr>)}
          </tbody>
          </table>
        </div>
      </div>
      : <div className="mx-auto m-5 text-light">No Employees in the List</div>
    }
    </div>
}


const mapStateToProps = (state) => {
  return {
    state:state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addName: (name) => dispatch(addName(name)),
    addDesignation: (name) => dispatch(addDesignation(name)),
    addEmp: (name,designation) => {dispatch(addEmp(name,designation))},
    delEmp:(emp)=>dispatch(delEmp(emp))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(EmpList);
