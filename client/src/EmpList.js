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

  delEmp=(emp)=>{this.setState({empList:this.state.empList.filter(e=>e!=emp)})}
  render(){
    return(
    <div>
    <div className="bg-warning p-3 container">
      <h4>Employee List</h4>
    <div className="row">
    <div className="mx-auto">
      <form className="input-group mx-auto" onSubmit={this.handleSubmit}>
        <input className="input-group-addon" placeholder="Name" id="name" type="text" value={this.state.name} onChange={this.handleChange}/>
        <input className="input-group-addon" placeholder="Designation" id="designation" value={this.state.designation} type="text" onChange={this.handleChange} />
        <button className="btn btn-danger">Submit</button>
      </form>
    </div>
    </div>
    <EmpTbl empList={this.state.empList} delEmp={this.delEmp}></EmpTbl>
    </div>
    </div>
  );
  }
}

const EmpTbl=(props)=>{
  return <div className="row"><table className="text-left table mt-1 table-striped bg-light mx-auto  col-md-6 width:100%">
    <tbody>
  {props.empList.map((emp)=><tr className="link hstrike" title="Click to Delete" onClick={()=>props.delEmp(emp)} key={emp.name}><td>{emp.name}</td><td>{emp.designation}</td></tr>)}
  </tbody>
</table></div>
}
export default EmpList;
