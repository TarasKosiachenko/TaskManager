import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Tasks from "../Tasks/Tasks";
import TasksToday from "../TasksToday/TasksToday";
import ToggleButtonGroup from "./ToggleButtonGroup";
import "./Content.scss";

import { useSelector } from "react-redux";

const Content = () => {
  const [update, setUpdate] = useState(0);
  const [checkedId, setCheckedId] = useState("tasks2");

  const storeLists = useSelector((state) => state.dashboard.lists);

  const updateComponent = () => {
    setUpdate((prevUpdate) => prevUpdate + 1);
  };

  useEffect(() => {
    updateComponent();
  }, [storeLists.length]);

  function changeTargerRadio(e) {
    e.stopPropagation();
    if (e.target.id === "tasks2") {
      document.querySelector(".todo_list").classList.remove("show-done");
      setCheckedId("tasks2");
    } else if (e.target.id === "tasks1") {
      document.querySelector(".todo_list").classList.add("show-done");
      setCheckedId("tasks1");
    }
  }

  return (
    <main key={update}>
      <div className="todo_list">
        <ToggleButtonGroup onChange={changeTargerRadio} checkedId={checkedId} />
        <Routes>
          <Route path={"/"} element={<TasksToday />} />
          <Route path="/lists/:id" element={<Tasks />} />
          <Route path={"/today"} element={<TasksToday />} />
        </Routes>
      </div>
    </main>
  );
};

export default Content;
