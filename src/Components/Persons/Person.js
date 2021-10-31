import React, { useState } from "react";
import "./Person.css";
import iconOfUser from "./Vision_Paul_Bettany_Marvel_Avengers_Age_Of_Ultron_card_party_face_mask_buy_now_at_starstills__75359.1427211627.jpg";

const Persons = () => {
  const [toggled, setToggled] = useState(true);
  const personsArray = new Array(9).fill(null).map((it, index) => index + 1);
  let result = [];
  const onClick = () => {
    setToggled(!toggled);
  };
  return (
    <div>
      <button onClick={onClick}>ds</button>
      {toggled &&
        personsArray.map((it) => {
          return (
            <div>
              <button type="button" className={`button${it}`}>
                {it === 1 && <img src={iconOfUser} alt="iconOfUser"/>}
              </button>
            </div>
          );
        })}
      {result}
    </div>
  );
};

export default Persons;
