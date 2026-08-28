import { fetchTodos } from "@/services/api";
import TodoListItem from "./TodoListItem";
import TodoListItemEmpty from "./TodoListItemEmpty";
import TodoDownload from "./TodoDownload";

export default async function TodoList() {
  const { data: todos } = await fetchTodos();
  return (
    <ul className="todo__list">
      {/* 할 일 목록이 없을 때  */}
      {todos.length === 0 && <TodoListItemEmpty />}
      {/* 할 일 목록이 있을 때 */}
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
      <TodoDownload />
    </ul>
  );
}
