import TodoEditor from "@/components/todo-list/todo-editor";
import TodoItem from "@/components/todo-list/todo-item";
import { API_URL } from "@/lib/constants";
import type { Todo } from "@/types";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useTodosData } from "@/hooks/quries/use-todos.data";
// import { useTodos } from "@/store/todos";

export default function TodoListPage() {
  // const todos = useTodos();
  // const [todos, setTodos] = useState<Todo[]>([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();

  // const fetchData = async () => {
  //   try {
  //     setIsLoading(true);
  //     const data = await fetchTodos();
  //     setTodos(data);
  //   } catch (error) {
  //     setError(error as any);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const {
  //   data: todos,
  //   isLoading,
  //   error,
  // } = useQuery({
  //   queryFn: fetchTodos,
  //   queryKey: ["todos"],
  // });

  const { data: todos, isLoading, error } = useTodosData();

  if (isLoading) {
    console.log("Loading...");
    return <div>Loading...</div>;
  }

  if (error) {
    console.log("Error: ", error);
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex flex-col gap-5 p-5">
      <h1 className="text-2xl font-bold">Todo List</h1>
      <TodoEditor />
      {todos?.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
