import "./TodoItem.css";
import { memo } from "react";

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="TodoItem">
      <input type="checkbox" checked={todo.isDone} onChange={onToggle} />
      <div className="content">{todo.content}</div>
      <div className="date">{new Date(todo.date).toLocaleDateString()}</div>
      <button onClick={onDelete}>삭제</button>
    </div>
  );
};

// 교차 컴포넌트 (HOC)
// export default memo(TodoItem, (prevProps, nextProps) => {
//   if (prevProps.todo.id !== nextProps.todo.id) return false;
//   if (prevProps.todo.isDone !== nextProps.todo.isDone) return false;
//   if (prevProps.todo.content !== nextProps.todo.content) return false;
//   if (prevProps.todo.date !== nextProps.todo.date) return false;

//   return true;
// });

export default memo(TodoItem);
