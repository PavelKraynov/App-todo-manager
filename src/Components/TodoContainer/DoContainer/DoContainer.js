import { useState } from "react";
import "./DoContainer.css";

const DoContainer = () => {
  const [createTask, setCreateTask] = useState([
    "do your dinner",
    " visit your mother",
  ]);
const deleteTask = () => {
  const removeLastTask = createTask.slice(0, createTask.length-1);
  setCreateTask(removeLastTask);
}
  return (
    <div className="do-wrapper">
      {createTask.length > 0 ? <div className="do-wrapper-tasks">{createTask.map((task) => {
        return (
          <div  className="do-wrapper__task">
          <div key={task.trim()}>
            {task}

          </div>
<button className="do-wrapper__delete-some-task" type="button">click!</button>
           </div>
        );
      })}</div> : <div>Please create task =)</div>}
      <button className='do-wrapper__delete' type="button" onClick={deleteTask}>
        Delete task
      </button>
    </div>
  );
};

export default DoContainer;
