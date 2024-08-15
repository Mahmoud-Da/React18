import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Todo } from "./useTodos";
import APIClient from "../services/apiClient";
import { CACHE_KEY_TODOS } from "../constants";

const apiClient = new APIClient<Todo>("/todos");
interface AddTOdoContext {
  previousTodos: Todo[];
}
interface AddTOdoContext {
  previousTodos: Todo[];
}
const useAddTodo = (onAdd: () => void) => {
  const queryClient = useQueryClient();
  return useMutation<Todo, Error, Todo, AddTOdoContext>({
    mutationFn: apiClient.post,
    onMutate(newTodo: Todo) {
      const previousTodos =
        queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos = []) => [
        newTodo,
        ...todos,
      ]);

      onAdd();

      return { previousTodos };
    },

    onSuccess: (savedTodo, newTodo) => {
      queryClient.setQueriesData<Todo[]>(["todo"], (todos) =>
        todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
      );
    },

    onError(error, newTodo, context) {
      if (!context) return;

      queryClient.setQueriesData<Todo[]>(
        CACHE_KEY_TODOS,
        context.previousTodos
      );
    },
  });
};

export default useAddTodo;
