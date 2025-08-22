import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + action.data;
    case "decrement":
      return state - action.data;
    case "reset":
      return 0;
  }
  return state;
};

const Exam = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "increment", data: 1 })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "decrement", data: 1 })}>
        -
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default Exam;
