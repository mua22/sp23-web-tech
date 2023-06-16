import React, { useState } from "react";
const Counter = () => {
  //   let count = 0;
  const [count, setCount] = useState(0);
  const increment = () => {
    // count = count + 1;
    // console.log(count);
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <button disabled={count == 0} onClick={decrement}>
        {count == 0 ? <span>Not Allowed</span> : <span>Decrement</span>}
      </button>
      {count}
      <button onClick={increment}>Increment</button>
      <br />
      <div
        style={{
          border: "5px dashed",
          padding: "3px",
          margin: "3px",
          borderColor: count < 10 ? "red" : "green",
        }}
      >
        Current Count is {count}
        {count < 10 && <div>You are in danger zone</div>}
      </div>
      ANoter Count = {count}
    </div>
  );
};

export default Counter;
