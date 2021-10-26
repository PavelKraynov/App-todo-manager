import { useSelector, useDispatch } from "react-redux";
import "./DoContainer.css";

import { removeCurrentText } from "../../../redux/reducers/MyTodoText";

const DoContainer = () => {
  const dispatch = useDispatch();
  const { arrayOfTasks } = useSelector((s) => s.myTodoText);

  const removeTask = (currentTask) => {
    const removeText = arrayOfTasks.filter(({ id }) => id !== currentTask.id);
    dispatch(removeCurrentText(removeText));
  };
  return (
    <div className="todo-wrapper">
      TO-DO
      {arrayOfTasks.length > 0 ? (
        <div className="todo-wrapper-tasks">
          {arrayOfTasks.map((task) => {
            return (
              <div key={task.id} className="todo-wrapper-tasks__content">
                <div className="todo-wrapper-tasks__text-container">
                  <span className="todo-wrapper-tasks__text-date">
                    {task.date.split(" ")[3]} {task.date.split(" ")[4]}
                  </span>
                  <span className="todo-wrapper-tasks__text">{task.text}</span>
                </div>
                <button
                  className="todo-wrapper-tasks__button-delete "
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
        <div className = "todo-wrapper-empty">empty</div>
      )}
    </div>
  );
};

export default DoContainer;
