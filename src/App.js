import { useReducer } from 'react';
import './App.css';

let oldState = {
  value:0
}

let reducerFunc = (oldState,action) =>{
  //console.log(oldState)
  console.log(oldState.value.filter())
  /*if(action.type='ADDITION'){
    console.log(oldState,action.value + 1)
  }else{
      return oldState
  }
  /*switch(action.type){
      case 'ADDITION':
        return {...oldState,value:oldState.value + 1};
        break ;
      case 'SUBSTRACTION':
        return {...oldState,value:oldState.value - 1}
        break ;

      default :
    }*/
    return oldState
}

function App() {
  const[newState,dispatch] = useReducer(reducerFunc,oldState)
  return (
    <div className="App">
      <h1>{newState.value}</h1>
      <button onClick={()=>{dispatch({type:"ADDITION",payload:5 })}}>ADD</button>
      <button onClick={()=>{dispatch({type:"SUBSTRACTION"})}}>SUB</button>
    </div>
  );
}

export default App;
