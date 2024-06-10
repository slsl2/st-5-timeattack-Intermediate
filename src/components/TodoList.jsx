import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

export default function TodoList() {
  const todos = useSelector((state) => state.todo.todos);
  const workingTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);

  return (
    <section>
      <div className="working-todos">
        <h2>Working</h2>
        <ul className="working-ul">
          {workingTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
      <div className="done-todos">
        <h2>Done</h2>
        <ul className="done-ul">
          {doneTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
    </section>
  );
}
