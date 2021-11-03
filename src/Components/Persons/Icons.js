import { useState } from 'react'
import { nanoid } from "nanoid";

import { useDispatch, useSelector } from 'react-redux';

import iconOfUser1 from "./IconsForModal/mask1.jpg";
import iconOfUser2 from "./IconsForModal/mask2.jpeg";
import iconOfUser3 from "./IconsForModal/mask3.png";
import iconOfUser4 from "./IconsForModal/mask4.png";
import iconOfUser5 from "./IconsForModal/mask5.png";
import iconOfUser6 from "./IconsForModal/mask6.jpeg";
import iconOfUser7 from "./IconsForModal/mask7.jpeg";
import iconOfUser8 from "./IconsForModal/mask8.jpeg";
import iconOfUser9 from "./IconsForModal/mask9.png";
import { addNameDoingTask } from "../../redux/reducers/MyDoingText";
import { createPortal } from "react-dom";

import "./Person.css";
import React from "react";

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

const Icons = ({ selectOfDoingTask, id ,onCloseWindow }) => {

  const[toogled, setToggled] = useState(false)
  const[errorText, setErrorText] = useState('')

  const [textIconName, setTextIconName] = useState("");
  const { arrayOfDoingTasks } = useSelector((s) => s.myDoingText);
  const dispatch = useDispatch();

  const onClick = (index) => {
    selectOfDoingTask(allIcons[index])
    setToggled(true)
  }

  const onClickIconName = () => {
    const textTrimIconName = textIconName.trim();
    if (textTrimIconName.length > 0) {
      const sliceStrUpp = textIconName.slice(0, 1).toUpperCase();
      const sliceStrLower = textIconName.slice(1, ).toLocaleLowerCase();
      dispatch(addNameDoingTask(`${sliceStrUpp}${sliceStrLower}`, id));
      onCloseWindow()
    }
    return setErrorText("Please, write your Name");
  };
  return (
    <div className="create-portal">
      <div className="create-portal__position-window">
        <div className="create-portal-window">
          SELECT AN ICON AND ENTER YOUR NAME
          <div className="create-portal-window-content">
            {allIcons.map((_, index) => {
              return (
                <div key={nanoid()}>
                  <button
                    type="button"
                    onClick={() => onClick(index)}
                    className="create-portal-window__button"
                  >
                    <img
                      className="create-portal-window__icon"
                      src={allIcons[index]}
                      alt="iconOfUser"
                    />
                  </button>
                </div>
              );
            })}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {toogled && (
              <img
                className="create-portal-window__icon"
                src={arrayOfDoingTasks[arrayOfDoingTasks.length - 1].icon}
                alt="iconOfUser"
              />
            )}

            <input
              type="text"
              className="create-portal-window__input-name"
              onChange={(e) => setTextIconName(e.target.value)}
              value={textIconName}
            />
            <button
              onClick={onClickIconName}
              className="create-portal-window__send-name"
            >
              Enter
            </button>
            <button
              className="create-portal-window__exit"
              onClick={onCloseWindow}
            >
              Exit
            </button>
          </div>
          <div className="error-text"> {errorText}</div>
        </div>
      </div>
    </div>
  );
};
export default Icons;
