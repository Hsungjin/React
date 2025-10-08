import { createContext, useContext } from "react";
import type { Todo } from "../types";

export const TodoStateContext = createContext<Todo[] | null>(null);
export const TodoDispatchContext = createContext<{
  onClickAdd: (text: string) => void;
  onClickDelete: (id: number) => void;
} | null>(null);

export function useTodoDispatch() {
  const dispatch = useContext(TodoDispatchContext);
  if (!dispatch) throw new Error("TodoDispatchContext not found");
  return dispatch;
}
