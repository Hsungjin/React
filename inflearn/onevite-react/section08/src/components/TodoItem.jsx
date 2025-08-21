import "./TodoItem.css";

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

export default TodoItem;
