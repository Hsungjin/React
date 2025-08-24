import "./App.css";
import { useReducer, useCallback } from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import Exam from "./components/Exam";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "운동가기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: true,
    content: "코딩하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "밥먹기",
    date: new Date().getTime(),
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "TOGGLE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
    case "DELETE":
      return state.filter((todo) => todo.id !== action.id);
  }
  return state;
};

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);

  const onCreate = useCallback(
    (content) => {
      const newTodo = {
        id: todos.length + 1,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      };
      dispatch({ type: "CREATE", data: newTodo });
    },
    [todos]
  );

  const onToggle = useCallback((id) => {
    dispatch({ type: "TOGGLE", id });
  }, []);

  const onDelete = useCallback((id) => {
    dispatch({ type: "DELETE", id });
  }, []);

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onToggle={onToggle} onDelete={onDelete} />
      <Exam />
    </div>
  );
}

export default App;
