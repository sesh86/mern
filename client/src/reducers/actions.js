import axios from 'axios';
export const addName = (name) => {
  return {
    type: 'ADD_NAME',
    name
  }
}

export const addDesignation = (designation) => {
  return {
    type: 'ADD_DESIGNATION',
    designation
  }
}

export const addEmp = (name,designation) => {
  return {
    type: 'ADD_EMP',
    name,
    designation
  }
}

export const delEmp = (emp) => {
  return {
    type: 'DEL_EMP',
    emp
  }
}

// export const getUsers = () => {
//   const request = axios.get('https://jsonplaceholder.typicode.com/users');
//   request.then(function(res){
//     callUsers(res.data)
//   })
// }

export const getUsers=(res)=>{
  return {type: 'USERS',name: res};
}


export const mapDispatchUsers = (dispatch) => {
  return {
    getUsers: () =>{
      const request = axios.get('https://jsonplaceholder.typicode.com/users');
      request.then(function(res){
        dispatch(getUsers(res.data))
      })
    }
  }
}
