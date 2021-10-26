import { useSelector, useDispatch } from "react-redux";
import "./DoneContainer.css";

import { removeCurrentText } from "../../../redux/reducers/MyDoneText";

const DoneContainer = () => {
  const dispatch = useDispatch();
  const { arrayOfDoneTasks } = useSelector((s) => s.myDoneText);

  const removeTask = (currentTask) => {
    const removeText = arrayOfDoneTasks.filter(
      ({ id }) => id !== currentTask.id
    );
    dispatch(removeCurrentText(removeText));
  };
  return (
    <div className="done-wrapper">
      DONE
      {arrayOfDoneTasks.length > 0 ? (
        <div className="done-wrapper-tasks">
          {arrayOfDoneTasks.map((task) => {
            return (
              <div key={task.id} className="done-wrapper-tasks__content">
                <div className="done-wrapper-tasks__text-container">
                  <span className="done-wrapper-tasks__text-date">
                    {task.date.split(" ")[3]} {task.date.split(" ")[4]}
                  </span>
                  <span className="done-wrapper-tasks__text">{task.text}</span>
                </div>
                <button
                  className="done-wrapper-tasks__button-delete "
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
        <div className="done-wrapper-empty">Empty</div>
      )}
    </div>
  );
};

export default DoneContainer;
