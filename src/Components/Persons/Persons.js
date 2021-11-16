import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./IconsForPersons.css";
import defaultIcon from "./IconsForModal/defaltIcon.jpeg";

import { editedToDoTask } from '../../redux/reducers/MyTodoText'
import { editDoingTask } from "../../redux/reducers/MyDoingText";
import { editDoneTask } from "../../redux/reducers/MyDoneText";


import Icons from "./Icons";
import { createPortal } from "react-dom";




const portalElement = document.querySelector('#portal')

const Persons = ({ id }) => {
  const dispatch = useDispatch();
  const [toggled, setToggled] = useState(false);
  const onClick = () => {
    setToggled(!toggled);
  };

  const selectOfDoingTask = (icon) => {
    dispatch(editDoingTask(id, icon))
  }
  const selectOfToDoTask = (icon) => {
    dispatch(editedToDoTask(id, icon));
  };
  const selectOfDoneTask = (icon) => {
    dispatch(editDoneTask(id, icon));
  }
  return (
    <div>
      <button onClick={onClick} className="icon-of-change__default-button">
        <img
          className="icon-of-change__default-img"
          src={defaultIcon}
          alt="defaultIcon"
        />
      </button>
      <div>
        {toggled &&
          createPortal(
            <Icons
              id={id}
              selectOfDoingTask={selectOfDoingTask}
              selectOfToDoTask={selectOfToDoTask}
              selectOfDoneTask={selectOfDoneTask}
              toggled={toggled}
              onCloseWindow={() => setToggled(false)}
            />,
            portalElement
          )}
      </div>
    </div>
  );
};

export default Persons;
