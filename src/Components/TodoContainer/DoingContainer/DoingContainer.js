import { useSelector, useDispatch } from "react-redux";
import "./DoingContainer.css";

import { removeDoingCurrentText } from "../../../redux/reducers/MyDoingText";

import { addInputTextToDo } from "../../../redux/reducers/MyTodoText";
import { addInputTextDone } from "../../../redux/reducers/MyDoneText";
import Persons from "../../Persons/Person";

const DoingContainer = () => {
  const dispatch = useDispatch();
  const { arrayOfDoingTasks } = useSelector((s) => s.myDoingText);

  const removeTask = (currentTask) => {

    const removeText = arrayOfDoingTasks.filter(
      ({ id }) => id !== currentTask.id
    );
    dispatch(removeDoingCurrentText(removeText));
  };
  const moveTaskToDo = (currentTask) => {
    dispatch(addInputTextToDo(currentTask.text));
    const removeText = arrayOfDoingTasks.filter(
      ({ id }) => id !== currentTask.id
      );
    dispatch(removeDoingCurrentText(removeText));
  };
  const moveTaskToDone = (currentTask) => {
    dispatch(addInputTextDone(currentTask.text));
    const removeText = arrayOfDoingTasks.filter(
      ({ id }) => id !== currentTask.id
    );
    dispatch(removeDoingCurrentText(removeText));
  };
  return (
    <div className="doing-wrapper">

      {console.log(arrayOfDoingTasks)}
      DOING
      {arrayOfDoingTasks.length > 0 ? (
        <div className="doing-wrapper-tasks">
          {arrayOfDoingTasks.map((task) => {
            return (
              <div key={task.id} className="doing-wrapper-tasks__content">
                <div className="doing-wrapper-tasks__text-container">
                  <div className="doing-wrapper-tasks__date-icon-wrapper">
                    <span className="doing-wrapper-tasks__text-date">
                      {task.date.split(" ")[3]} {task.date.split(" ")[4]}
                    </span>
                    {task.icon && (
                      <img
                        className="doing-wrapper-tasks__icon"
                        src={task.icon}
                        alt="userWithIcon"
                      />
                    )}
                    {task.textIconName}
                  </div>
                  <span className="doing-wrapper-tasks__text">{task.text}</span>
                </div>
                <div className="doing-wrapper-tasks__buttons-container">
                  <div className="doing-wrapper-tasks__buttons-container-move">
                    <button
                      className="doing-wrapper-tasks__button-move"
                      onClick={() => moveTaskToDo(task)}
                      type="button"
                    >
                      TO-DO
                    </button>
                    <button
                      className="doing-wrapper-tasks__button-move"
                      onClick={() => moveTaskToDone(task)}
                      type="button"
                    >
                      DONE
                    </button>
                  </div>
                  <button
                    className="doing-wrapper-tasks__button-delete"
                    onClick={() => removeTask(task)}
                    type="button"
                  >
                    🗑
                  </button>
                  <Persons id={task.id} />
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="doing-wrapper-empty">empty</div>
      )}
    </div>
  );
};

export default DoingContainer;
