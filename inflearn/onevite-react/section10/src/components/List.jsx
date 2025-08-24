import "./List.css";
import TodoItem from "./TodoItem";
import { useState, useMemo } from "react";

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

  const getAnalyzedData = useMemo(() => {
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = todos.filter((todo) => !todo.isDone).length;
    return { totalCount, doneCount, notDoneCount };
  }, [todos]);

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <div>
        <div>Total: {getAnalyzedData.totalCount}</div>
        <div>Done: {getAnalyzedData.doneCount}</div>
        <div>Not Done: {getAnalyzedData.notDoneCount}</div>
      </div>
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
