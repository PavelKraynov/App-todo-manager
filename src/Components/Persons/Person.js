import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";

import "./Person.css";

import { editedToDoTask } from '../../redux/reducers/MyTodoText'

import defaultIcon from "./IconsFor/defaltIcon.jpeg";

import { editDoingTask } from "../../redux/reducers/MyDoingText";
import Icons from "./Icons";
import { createPortal } from "react-dom";
import ModalWindow from "./ModalWindow";



const portalElement = document.querySelector('#portal')

const Persons = ({ id, callbackShowPerson }) => {
  const dispatch = useDispatch();
  const [toggled, setToggled] = useState(false);
  const personsArray = new Array(9).fill(null).map((_, index) => index + 1);
  const onClick = () => {
    setToggled(!toggled);
    // callbackShowPerson(toggled);
  };

  // const selectUserForTask = (icon) => {
  //   dispatch(editedToDoTask(id, icon));
  //   setToggled(!toggled);
  //   // callbackShowPerson(toggled)
  // };

  const selectOfDoingTask = (icon) => {
    dispatch(editDoingTask(id, icon))
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
            <Icons selectOfDoingTask={selectOfDoingTask} />,
            portalElement
          )}
      </div>
    </div>
  );
};

export default Persons;
