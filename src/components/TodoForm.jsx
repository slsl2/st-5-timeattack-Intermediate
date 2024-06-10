import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/todoSlice";
import { v4 as uuidv4 } from "uuid";

export default function TodoForm() {
  const [newTitle, setNewTitle] = useState("");
  const [newContents, setNewContents] = useState("");
  const dispatch = useDispatch();

  const handleTitle = (event) => {
    setNewTitle(event.target.value);
  };
  const handleContents = (event) => {
    setNewContents(event.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!title.trim() || !contents.trim()) {
      alert("제목과 내용을 모두 입력해주세요");
      return;
    }
    const newTodo = {
      id: uuidv4(),
      title: newTitle,
      contents: newContents,
      isDone: false,
    };

    dispatch(addTodo(newTodo));

    setNewTitle("");
    setNewContents("");
  };

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          onChange={handleTitle}
          value={title}
          placeholder="제목"
        ></input>
        <input
          type="text"
          onChange={handleContents}
          value={contents}
          placeholder="내용"
        ></input>
        <button type="submit">추가하기</button>
      </form>
    </div>
  );
}
