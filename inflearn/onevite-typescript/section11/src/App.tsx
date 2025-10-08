import "./App.css";

import { useRef, useEffect, useReducer } from "react";
import Editor from "./components/Editor";
import type { Todo } from "./types";
import TodoItem from "./components/TodoItem";
import { TodoStateContext, TodoDispatchContext } from "./contexts/TodoContext";

export type Action =
  | {
      type: "CREATE";
      data: {
        id: number;
        content: string;
      };
    }
  | {
      type: "DELETE";
      id: number;
    };

function reducer(state: Todo[], action: Action) {
  switch (action.type) {
    case "CREATE":
      return [...state, action.data];
    case "DELETE":
      return state.filter((todo) => todo.id !== action.id);
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);

  const idRef = useRef<number>(0);

  const onClickAdd = (text: string) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        content: text,
      },
    });
  };

  const onClickDelete = (id: number) => {
    dispatch({
      type: "DELETE",
      id: id,
    });
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <TodoStateContext.Provider value={todos}>
      <div className="App">
        <h1>TODO</h1>
      </div>
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider
          value={{ onClickAdd, onClickDelete }}
        ></TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
      <Editor />
      <div>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </TodoStateContext.Provider>
  );
}

export default App;
