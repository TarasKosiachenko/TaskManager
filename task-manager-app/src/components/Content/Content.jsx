import { Routes, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import Tasks from "../Tasks/Tasks";
import TasksToday from "../TasksToday/TasksToday";
import "./Content.scss";

const Content = () => {
  function changeTargerRadio(e) {
    e.stopPropagation();
    if (e.target.id === "tasks2") {
      document.querySelector(".todo_list").classList.remove("show-done");
    } else if (e.target.id === "tasks1") {
      document.querySelector(".todo_list").classList.add("show-done");
    }
  }

  return (
    <main>
      <div className="todo_list">
        <div
          onClick={changeTargerRadio}
          className="btn-group"
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <input
            type="radio"
            className="btn-check check_undone"
            name="tasks"
            id="tasks2"
            defaultChecked
          />
          <label className="btn btn-outline-secondary" htmlFor="tasks2">
            Uncompleted Tasks
          </label>

          <input
            type="radio"
            className="btn-check check_all"
            name="tasks"
            id="tasks1"
          />
          <label className="btn btn-outline-secondary" htmlFor="tasks1">
            All Tasks
          </label>
        </div>
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path="/lists/:id" element={<Tasks />} />

          <Route path={"/today"} element={<TasksToday />} />
        </Routes>
      </div>
    </main>
  );
};

export default Content;
