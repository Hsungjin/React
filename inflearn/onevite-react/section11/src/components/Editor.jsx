import "./Editor.css";
import { useState, useRef, useContext } from "react";
import { TodoContext } from "../App";

const Editor = () => {
  const { onCreate } = useContext(TodoContext);
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onSubmit = () => {
    if (content.trim() === "") {
      contentRef.current.focus();
      return;
    }

    onCreate(content);
    setContent("");
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div className="Editor">
      <input
        ref={contentRef}
        type="text"
        placeholder="새로운 Todo... 📝"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onKeyDown={onKeyDown}
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
