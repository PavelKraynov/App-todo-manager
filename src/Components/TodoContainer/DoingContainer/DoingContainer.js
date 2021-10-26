import { useSelector, useDispatch } from "react-redux";
import "./DoingContainer.css";

import { removeDoingCurrentText } from "../../../redux/reducers/MyDoingText";

const DoingContainer = () => {
  const dispatch = useDispatch();
  const { arrayOfDoingTasks } = useSelector((s) => s.myDoingText);

  const removeTask = (currentTask) => {
    const removeText = arrayOfDoingTasks.filter(
      ({ id }) => id !== currentTask.id
    );
    dispatch(removeDoingCurrentText(removeText));
  };
  return (
    <div className="doing-wrapper">
      DOING
      {arrayOfDoingTasks.length > 0 ? (
        <div className="doing-wrapper-tasks">
          {arrayOfDoingTasks.map((task) => {
            return (
              <div key={task.id} className="doing-wrapper-tasks__content">
                <div className="doing-wrapper-tasks__text-container">
                  <span className="doing-wrapper-tasks__text-date">
                    {task.date.split(" ")[3]} {task.date.split(" ")[4]}
                  </span>
                  <span className="doing-wrapper-tasks__text">{task.text}</span>
                </div>
                <button
                  className="doing-wrapper-tasks__button-delete "
                  onClick={() => removeTask(task)}
                  type="button"
                >
                  🗑
                </button>
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
