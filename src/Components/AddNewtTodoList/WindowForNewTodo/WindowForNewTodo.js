import { useState } from "react";
import { useDispatch } from "react-redux";
import "./WindowForNewTodo.css";

import { addInputText } from "../../../redux/reducers/MyTodoText";

const WindowForNewTodo = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };
  const onAddClick = () => {
    const textTrim = text.trim();
    if (textTrim) {
      dispatch(addInputText(text));
    }
    setText("");
  };
  return (
    <div className="window-add-task">
      <input
        className="window-add-task__input"
        type="text"
        onChange={onChange}
        value={text}
      />
      <button
        className="window-add-task__button"
        type="text"
        onClick={onAddClick}
      >
        ✍🏻
      </button>
    </div>
  );
};

export default WindowForNewTodo;
