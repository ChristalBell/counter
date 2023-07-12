import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount(count + 1);
  };

  const subtractOne = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Count</h1>
      <p>{count}</p>
      <button onClick={addOne}>+1</button>
      <button onClick={subtractOne}>-1</button>
    </div>
  );
};

export default Counter;
