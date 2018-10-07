const initState = {
  name:'',designation:'',empList:[{name:'Seshachalam',designation:'TL'},{name:'Zuckerburg',designation:'Founder'}],users:[]
}

const rootReducer = (state = initState, action) => {


  if(action.type==='ADD_NAME'){
      return {
        ...state,
        name:[action.name]
      }
  }

  else if(action.type==='ADD_DESIGNATION'){
      return {
        ...state,
        designation:[action.designation]
      }
  }
  else if(action.type==='ADD_EMP'){

      return {
        ...state,
        empList:[...state.empList,{name:action.name,designation:action.designation}],
        name:'',
        designation:''
      }
  }
  else if(action.type==='DEL_EMP'){
      return {
        ...state,
        empList:[...state.empList.filter(e=>e!==action.emp)]
      }
  }
  else if(action.type==='USERS'){
        return {
          ...state
          ,users:action.name
        }
  }
  if(!action.name)
    return state
}

export default rootReducer
