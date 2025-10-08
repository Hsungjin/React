import type { Todo } from "../types";
import { useTodoDispatch } from "../contexts/TodoContext";

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem(props: TodoItemProps) {
  const dispatch = useTodoDispatch();

  const onClickDelete = () => {
    dispatch.onClickDelete(props.todo.id);
  };

  return (
    <div>
      {props.todo.id + 1}번: {props.todo.content}
      <button onClick={onClickDelete}>삭제</button>
    </div>
  );
}
