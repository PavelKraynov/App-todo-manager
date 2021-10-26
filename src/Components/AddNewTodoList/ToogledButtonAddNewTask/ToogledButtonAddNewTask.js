import { useState } from 'react'
import WindowForNewTodo from '../WindowForNewTodo/WindowForNewTodo'

import "./ToogledButtonAddNewTask.css";

const ButtotAndInputForNewTodo = () => {
  const [toggled, setToggled] = useState(false)
  const onClick = () => {
    setToggled(!toggled);
  }
  return (
    <div className="root-create-forAdd">
      <div className="root-create-forAdd__button">
        <button
          className="root-create-forAdd__button--size--color"
          type="button"
          onClick={onClick}
        >
          ✍🏻
        </button>
      </div>

      {toggled && (
        <div className="root-create-forAdd__window">
          <WindowForNewTodo />
        </div>
      )}
    </div>
  );
};

export default ButtotAndInputForNewTodo;
