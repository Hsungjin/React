import { useState } from 'react';

export const StateComponent2 = () => {
  const [count, setCount] = useState(0);

  const sub = (): void => {
    setCount(count - 1);
  };

  const add = (): void => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={sub}>-</button>
      <label>{count}</label>
      <button onClick={add}>+</button>
    </div>
  );
};

export default StateComponent2;
