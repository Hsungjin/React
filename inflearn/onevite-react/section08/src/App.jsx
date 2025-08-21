import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";

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

function App() {
  const [todos, setTodos] = useState(mockData);

  const onCreate = (content) => {
    const newTodo = {
      id: todos.length + 1,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };
    setTodos([newTodo, ...todos]);
  };

  const onToggle = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const onDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onToggle={onToggle} onDelete={onDelete} />
    </div>
  );
}

export default App;
