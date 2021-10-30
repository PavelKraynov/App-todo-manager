import React, { useState } from "react";
import './Person.css'

const Persons = () => {
  const [toggled, setToggled] = useState(true)
  const personsArray = new Array(9).fill(null).map((it, index) => index + 1);
  let result = []
  const onClick = () => {
    setToggled(!toggled);
  }
  return (
    <div>
      <button onClick={onClick}>ds</button>
      {toggled && personsArray.map(it => {
        return <div >
          <button type='button' className={`button1${it}`}>
          </button>
        </div>
      })}
      {result}
    </div>
  );
}

export default Persons;