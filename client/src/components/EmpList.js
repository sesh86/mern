import React,{Component} from 'react';

class EmpList extends Component {
  constructor(props) {
    super(props);
    this.state = { name:'',designation:'',empList:[{name:'Sesh',designation:'TL'},{name:'Zuckerburg',designation:'Founder'}]};
  }
  handleChange=(e)=>{this.setState({[e.target.id]:e.target.value});}

  handleSubmit=(e)=>{
    e.preventDefault();
    // let l_empList=this.state.empList;
    let l_empList=[...this.state.empList];//http://es6-features.org/#SpreadOperator
    l_empList.push({name:this.state.name,designation:this.state.designation});
    this.setState({empList:l_empList,name:'',designation:''});
  }

  delEmp=(emp)=>{this.setState({empList:this.state.empList.filter(e=>e!==emp)})}
  render(){
    return(
    <div className="bg-warning p-5">
      <h4 className="text-white p-3">Employee List</h4>
      <div className="card bg-dark mx-auto">
        <div className="card-header">
          <div className="row">
          <div className="mx-auto">
            <form className="input-group mx-auto" onSubmit={this.handleSubmit}>
              <input className="input-group-addon" placeholder="Name" id="name" type="text" value={this.state.name} onChange={this.handleChange}/>
              <input className="input-group-addon" placeholder="Designation" id="designation" value={this.state.designation} type="text" onChange={this.handleChange} />
              <button className="btn-danger link btn">Add Employees</button>
            </form>
          </div>
          </div>
        </div>
        <EmpTbl empList={this.state.empList} delEmp={this.delEmp}></EmpTbl>
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
export default EmpList;
