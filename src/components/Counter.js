import React, { useReducer } from "react";
import Navbar from "./Navbar";
import { Helmet } from "react-helmet-async";


  const initialState = 0;
  const reducer = (state, action) => {
    switch (action) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      case "reset":
        return initialState;
      default:
        return state;
    }
  };


function Counter() {
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


  return (
    <section>
      <Helmet>
        <title>UseReducer Counter</title>
        <meta name="description" content="counter application." />
        <link rel="canonical" href="/counter" />
      </Helmet>

      <Navbar />
      <div className="App">
        <div className="counter-container">
          <div className="count">{values}</div>
          <div className="operators-two">
            <button onClick={() => increment()}>Increase</button>
            <button onClick={() => decrement()}>Decrease</button>
            <button onClick={() => reset()}>Reset</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Counter;
