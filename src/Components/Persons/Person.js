import React, { useState } from "react";
import ReactDOM from 'react-dom'
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { Portal, PortalWithState } from "react-portal";

import "./Person.css";

import { editedToDoTask } from '../../redux/reducers/MyTodoText'

import defaultIcon from "./IconsFor/defaltIcon.jpeg";
import iconOfUser1 from "./IconsFor/mask1.jpg";
import iconOfUser2 from "./IconsFor/mask2.jpeg";
import iconOfUser3 from "./IconsFor/mask3.png";
import iconOfUser4 from "./IconsFor/mask4.png";
import iconOfUser5 from "./IconsFor/mask5.png";
import iconOfUser6 from "./IconsFor/mask6.jpeg";
import iconOfUser7 from "./IconsFor/mask7.jpeg";
import iconOfUser8 from "./IconsFor/mask8.jpeg";
import iconOfUser9 from "./IconsFor/mask9.png";
import { editDoingTask } from "../../redux/reducers/MyDoingText";

const allIcons = [
  iconOfUser1,
  iconOfUser2,
  iconOfUser3,
  iconOfUser4,
  iconOfUser5,
  iconOfUser6,
  iconOfUser7,
  iconOfUser8,
  iconOfUser9,
];
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

    <div className="all">
      <button
        onClick={onClick}
        id="default-button"
        className="icon-of-change__default-button"
      >
        <img src={defaultIcon} alt="defaultIcon" />
      </button>
      <div>
        {toggled &&
          personsArray.map((it, index) => {
            return (
              <div key={nanoid()} className="icon-of-change__buttons">
                <button
                  type="button"
                  onClick={() => selectOfDoingTask(allIcons[index])}
                  className="icon-of-change__button-icon"
                >
                  <img src={allIcons[index]} alt="iconOfUser" />
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Persons;
