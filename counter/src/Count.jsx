import React, { useReducer } from 'react'

function reducder(state,action){
switch(action.type){
  case 'increment':
    return {count:state.count+1}
     case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      return state;
}
}
const Count = () => {
  const initialstate={count:0};
  const [state,dispatch]=useReducer(reducder,initialstate);

  const increment=()=>{
dispatch({type:'increment'})
  }
  const decrement=()=>{
    dispatch({type:'decrement'})
  }
  const reset=()=>{
    dispatch({type:'reset'})
  }
  return (
   <>
   <p>heelo</p>
      <h2>Count:{state.count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
   </>
  )
}

export default Count
