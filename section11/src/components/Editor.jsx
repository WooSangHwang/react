import "./Editor.css";
import { useState, useRef, useContext } from "react";
import { TodoDispatchContext } from "../App";
const Editor = () => {
  const [content, setContent] = useState("");
  const contentRef = useRef();
  const { onCreate } = useContext(TodoDispatchContext);
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };
  return (
    <div className={"Editor"}>
      <input
        ref={contentRef}
        onKeyDown={onKeyDown}
        value={content}
        onChange={onChangeContent}
        type="text"
        placeholder={"새로운 Todo..."}
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};
export default Editor;
