import { useReducer } from "react";

const useCustomCounter = (value) => {
    const initialState = 0;
    const reducer = (state, action) => {
      switch (action) {
        case "increment":
          return state + 1;
        case "decrement":
          return state - 1;
        case "reset":
          return initialState;
  
        case "set-value":
          return initialState + parseInt(value);
  
        default:
          return state;
      }
    };
  
    const [values, dispatch] = useReducer(reducer, initialState);
  
    const increment = (state) => {
      dispatch("increment");
    };
  
    const decrement = (state) => {
      dispatch("decrement");
    };
  
    const reset = (state) => {
      dispatch("reset");
    };
  
    const setValue = (item) => {
      dispatch("set-value");
    };
  
    return [values, increment, decrement, reset, setValue];
  };


  export default useCustomCounter;