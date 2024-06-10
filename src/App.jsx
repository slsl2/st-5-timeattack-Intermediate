import { Provider } from "@reduxjs/toolkit";
import "./App.css";
import { useState } from "react";
import { useDispatch } from "./redux/slices/calculatorSlice";

// TODO: 계산결과를 redux를 이용한 전역상태로 관리해 보세요.
function App() {
  const [nnumber, setNumber] = useState("");
  const dispatch = useDispatch();

  return (
    <Provider store={store}>
      {" "}
      <div className="App">
        <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
        <div>
          <input /> 만큼을 <button>더할게요</button> <button>뺄게요</button>
        </div>
        <hr />
        <div>
          <h3>결과</h3>
          <p>0</p>
        </div>
      </div>
    </Provider>
  );
}

export default App;
