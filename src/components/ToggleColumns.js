import React, { useState } from "react";

export const ToggleColumns = (props) => {
  //const [checked, setChecked] = useState(false);

  const [checkedState, setCheckedState] = useState(
    new Array(props.columns.length).fill(false)
  );

  const onCheckboxClick = (e, position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
    //setChecked((prevState) => !prevState);
  };

  // TODO: Bind handlers and props
  return (
    <div className="toggle-columns">
      {Object.keys(props.columns).map((column, index) => {
        return (
          <div key={index}>
            <label htmlFor={column}>{column}</label>
            <input
              id={column}
              name={column}
              checked={checkedState[index]}
              type="checkbox"
              onChange={(e) => onCheckboxClick(e, index)}
            />
          </div>
        );
      })}
    </div>
  );
};
