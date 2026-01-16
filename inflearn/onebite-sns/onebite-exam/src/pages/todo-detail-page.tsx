import { useParams } from "react-router-dom";
import { useTodoDataById } from "@/hooks/quries/use-todo-data-by-id";

export default function TodoDetailPage() {
  const params = useParams();
  const id = params.id;
  const { data, isLoading, error } = useTodoDataById(Number(id));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <div>{data?.content}</div>;
}
