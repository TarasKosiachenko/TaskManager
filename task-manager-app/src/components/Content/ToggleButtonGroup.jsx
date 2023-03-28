import React from "react";
import "./Content.scss";

const ToggleButtonGroup = ({ onChange, checkedId }) => {
  return (
    <div className="btn-group">
      <input
        id="tasks2"
        type="radio"
        name="tasks"
        checked={checkedId === "tasks2"}
        onChange={onChange}
      />
      <label for="tasks2">Uncompleted</label>

      <input
        id="tasks1"
        type="radio"
        name="tasks"
        checked={checkedId === "tasks1"}
        onChange={onChange}
      />
      <label for="tasks1">All Tasks</label>
    </div>
  );
};

export default ToggleButtonGroup;
