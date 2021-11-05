import { useSelector, useDispatch } from "react-redux";
import "./DoContainer.css";

import { removeToDoCurrentText } from "../../../redux/reducers/MyTodoText";
import { addInputTextDoing } from "../../../redux/reducers/MyDoingText";
import { addInputTextDone } from "../../../redux/reducers/MyDoneText";
import Persons from "../../Persons/Persons";
import { useState } from "react";


const DoContainer = () => {
  const [showIcons, setShowIcons] = useState(true)
  const dispatch = useDispatch();
  const { arrayOfTasks } = useSelector((s) => s.myTodoText);

  // const callbackShowPerson = (togglePerson) => {
  //   setShowIcons(togglePerson)
  // }
  // const removeText = (deleteText) => arrayOfTasks.filter(({ id }) => id !== deleteText.id);
  const removeTask = (currentTask) => {
    const removeText = arrayOfTasks.filter(({ id }) => id !== currentTask.id);
    dispatch(removeToDoCurrentText(removeText));
  };
  const moveTaskToDoing = (currentTask) => {
    dispatch(addInputTextDoing(currentTask.text));
    const removeText = arrayOfTasks.filter(({ id }) => id !== currentTask.id);
    dispatch(removeToDoCurrentText(removeText));
  };
  const moveTaskToDone = (currentTask) => {
    dispatch(addInputTextDone(currentTask.text));
    const removeText = arrayOfTasks.filter(({ id }) => id !== currentTask.id);
    dispatch(removeToDoCurrentText(removeText));
  };
  return (
    <div className="todo-wrapper">
      <div className="todo-wrapper__heading">TO-DO</div>
      {arrayOfTasks.length > 0 ? (
        <div className="todo-wrapper-tasks">
          {arrayOfTasks.map((task) => {
            return (
              <div key={task.id} className="todo-wrapper-tasks__content">
                <div className="todo-wrapper-tasks__text-container">
                  <div className="todo-wrapper-tasks__date-icon-wrapper">
                    <span className="todo-wrapper-tasks__text-date">
                      {task.date.split(" ")[3]} {task.date.split(" ")[4]}
                    </span>
                    {task.icon && (
                      <img
                        className="todo-wrapper-tasks__icon"
                        src={task.icon}
                        alt="user"
                      />
                    )}
                  </div>
                  <span className="todo-wrapper-tasks__text">{task.text}</span>
                </div>
                <div className="todo-wrapper-tasks__buttons-container">
                  <div className="todo-wrapper-tasks__buttons-container-move">
                    <button
                      className="todo-wrapper-tasks__button-move"
                      onClick={() => moveTaskToDoing(task)}
                      type="button"
                    >
                      DOING
                    </button>
                    <button
                      className="todo-wrapper-tasks__button-move"
                      onClick={() => moveTaskToDone(task)}
                      type="button"
                    >
                      DONE
                    </button>
                  </div>
                  <button
                    className="todo-wrapper-tasks__button-delete"
                    onClick={() => removeTask(task)}
                    type="button"
                  >
                    🗑
                  </button>
                  {showIcons && (
                    <Persons
                      id={task.id}
                      // callbackShowPerson={callbackShowPerson}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="todo-wrapper-empty">empty</div>
      )}
    </div>
  );
};

export default DoContainer;
