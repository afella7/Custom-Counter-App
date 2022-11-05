import React, { useState } from "react";
import useCustomCounter from "./CustomHook";
import Navbar from "./Navbar";
import { Helmet } from "react-helmet-async";

function CustomCounter() {
  const [data, setData] = useState("");
  const [values, increment, decrement, reset, setValue] =
    useCustomCounter(data);

  return (
    <section>
      <Helmet>
        <title>Custom Counter</title>
        <meta name="description" content="custom counter application." />
        <link rel="canonical" href="/" />
      </Helmet>

      <Navbar />
      <div className="App">
        <div className="counter-container">
          <div className="count">{values}</div>
          <div className="operators">
            <button onClick={() => increment()}>Increase</button>
            <button onClick={() => decrement()}>Decrease</button>
            <button onClick={() => reset()}>Reset</button>
          </div>
          <div className="set-count">
            <label>Set Count </label>
            <input
              value={data}
              onChange={(e) => setData(e.target.value)}
              type="tel"
            />
            <button onClick={() => setValue(data)}>Enter</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomCounter;
