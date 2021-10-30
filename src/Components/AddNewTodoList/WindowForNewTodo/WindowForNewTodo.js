import { useState } from "react";
import { useDispatch } from "react-redux";
import "./WindowForNewTodo.css";

import { addInputTextToDo } from "../../../redux/reducers/MyTodoText";
import { addInputTextDoing } from "../../../redux/reducers/MyDoingText";
import { addInputTextDone } from "../../../redux/reducers/MyDoneText";

const WindowForNewTodo = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const [textCheckBoxToDo, setTextCheckBoxToDo] = useState(true);
  const [textCheckBoxDoing, setTextCheckBoxDoing] = useState(false);
  const [textCheckBoxDone, setTextCheckBoxDone] = useState(false);

  const soldCheckBoxToDo = (e) => {
    setTextCheckBoxDoing(false);
    setTextCheckBoxDone(false);
    setTextCheckBoxToDo(e.target.checked);
  };
  const soldCheckBoxDoing = (e) => {
    setTextCheckBoxToDo(false);
    setTextCheckBoxDone(false);
    setTextCheckBoxDoing(e.target.checked);
  };
  const soldCheckBoxDone = (e) => {
    setTextCheckBoxToDo(false);
    setTextCheckBoxDoing(false);
    setTextCheckBoxDone(e.target.checked);
  };

  const onChange = (e) => {
    setText(e.target.value);
  };
  const onAddClick = () => {
    const textTrim = text.trim();
    if (textTrim && textCheckBoxToDo) {
      dispatch(addInputTextToDo(text));
      return setText("");
    }
    if (textTrim && textCheckBoxDoing) {
      dispatch(addInputTextDoing(text));
      return setText("");
    }
    if (textTrim && textCheckBoxDone) {
      dispatch(addInputTextDone(text));
      return setText("");
    }
  };
  return (
    <div className="window-add-task" onDragStart={(e) => {}}>
      <div className="window-add-task-content">
        <input
          className="window-add-task-content__input"
          type="text"
          onChange={onChange}
          value={text}
          placeholder="select the checkbox and send message...."
        />
        <button
          className="window-add-task-content__button"
          type="text"
          onClick={onAddClick}
        >
          ✍🏻
        </button>
      </div>
      <div className="window-add-task-boxes">
        <div id="to-do">
          <input
            className="window-add-task-boxes__checkbox"
            type="checkbox"
            checked={textCheckBoxToDo}
            onChange={soldCheckBoxToDo}
          />{" "}
          TO-DO
        </div>
        <div />
        <div id="doing">
          <input
            className="window-add-task-boxes__checkbox"
            type="checkbox"
            checked={textCheckBoxDoing}
            onChange={soldCheckBoxDoing}
          />{" "}
          DOING
        </div>
        <div id="done">
          <input
            className="window-add-task-boxes__checkbox"
            type="checkbox"
            checked={textCheckBoxDone}
            onChange={soldCheckBoxDone}
          />{" "}
          DONE
        </div>
      </div>
    </div>
  );
};

export default WindowForNewTodo;
