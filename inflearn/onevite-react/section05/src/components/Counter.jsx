import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>-1</button>
        <button onClick={() => setCount(0)}>초기화</button>
      </div>
    </div>
  );
};

export default Counter;
