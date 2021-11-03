import { nanoid } from "nanoid";
import iconOfUser1 from "./IconsForModal/mask1.jpg";
import iconOfUser2 from "./IconsForModal/mask2.jpeg";
import iconOfUser3 from "./IconsForModal/mask3.png";
import iconOfUser4 from "./IconsForModal/mask4.png";
import iconOfUser5 from "./IconsForModal/mask5.png";
import iconOfUser6 from "./IconsForModal/mask6.jpeg";
import iconOfUser7 from "./IconsForModal/mask7.jpeg";
import iconOfUser8 from "./IconsForModal/mask8.jpeg";
import iconOfUser9 from "./IconsForModal/mask9.png";
import { editDoingTask } from "../../redux/reducers/MyDoingText";
import { createPortal } from "react-dom";

import "./Person.css";

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

const ModalWindow = () => {
  return (
      <div className="icons-wraper">
        {allIcons.map((it, index) => {
          return (
            <div>
              <button
                type="button"
                className="icons-wraper__button"
                onClick={() => console.log(index)}
              >
                <img
                  className="icons-wraper__img"
                  src={allIcons[index]}
                  alt="iconOfUser1"
                />
              </button>
            </div>
          );
        })}
      </div>
  );
};
export default ModalWindow;
