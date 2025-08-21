import "./List.css";
import TodoItem from "./TodoItem";
import { useState } from "react";

const List = ({ todos, onToggle, onDelete }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilterdData = () => {
    if (search === "") {
      return todos;
    }

    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredTodos = getFilterdData();

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <input
        value={search}
        placeholder="검색어를 입력하세요"
        onChange={onChangeSearch}
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={() => onToggle(todo.id)}
            onDelete={() => onDelete(todo.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default List;
