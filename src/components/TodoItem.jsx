import { useDispatch } from "react-redux";
import { changeIsDoneTodo, deleteTodo } from "../redux/slices/todoSlice";

// Hint: TodoItem 컴포넌트는 props 를 받습니다.
export default function TodoItem({ todo }) {
  const dispatch = useDispatch;
  return (
    <li
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        border: "1px solid black",
        width: "500px",
        height: "150px",
      }}
    >
      <section>
        <p>{todo.title}</p>
        <p>{todo.contents}</p>
      </section>
      <section>
        <button onClick={() => dispatch(deleteTodo(todo.id))}>삭제</button>
        <button onClick={() => dispatch(changeIsDoneTodo(todo.id))}>
          {isWorking ? "완료" : "취소"}
        </button>
      </section>
    </li>
  );
}
