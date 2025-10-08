import { useState } from "react";
import { useTodoDispatch } from "../contexts/TodoContext";

export default function Editor() {
  const dispatch = useTodoDispatch();

  const [text, setText] = useState<string>("");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickAdd = () => {
    dispatch.onClickAdd(text);
    setText("");
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChangeInput} />
      <div style={{ marginTop: "10px" }}>
        <button onClick={onClickAdd}>추가</button>
      </div>
    </div>
  );
}
