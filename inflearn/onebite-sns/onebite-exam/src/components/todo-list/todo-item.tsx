import { Button } from "../ui/button";
import { useDeleteTodo } from "@/store/todos";
import type { Todo } from "@/types";
import { Link } from "react-router-dom";

export default function TodoItem({ todo }: { todo: Todo }) {
  const deleteTodo = useDeleteTodo();

  const handleDeleteClick = () => {
    deleteTodo(todo.id);
  };

  return (
    <div className="flex flex-row items-center justify-between gap-2 border p-2">
      <Link to={`/todolist/${todo.id}`}>{todo.content}</Link>
      <Button onClick={handleDeleteClick} variant={"destructive"}>
        삭제
      </Button>
    </div>
  );
}
