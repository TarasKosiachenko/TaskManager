import React, { useState, useMemo } from "react";
import "./FormCreate.scss";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { axiosAddTask } from "../../asyncActions/tasks";

import { incrementCounterAction } from "../../store/dashboardReducer";

const INITIAL_STATE = {
  name: "",
  description: "",
  due_date: null,
  done: false,
  list_id: 1,
};

const FormCreateTask = () => {
  const { pathname } = useLocation();
  const [form, setForm] = useState(INITIAL_STATE);
  const [emptyInput, setEmptyInput] = useState(false);
  const [showTaskContent, setShowTaskContent] = useState(true);

  const handleTaskTitleClick = () => {
    setShowTaskContent(!showTaskContent);
  };

  const dispatch = useDispatch();
  const storeLists = useSelector((state) => state.dashboard.lists);

  const shouldAddValue = useMemo(() => {
    return (
      (!!form.due_date &&
        new Date(form.due_date) <= new Date() &&
        pathname.includes("today")) ||
      !pathname.includes("today")
    );
  }, [form.due_date, pathname]);

  function handleChange(e) {
    setForm((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  }

  function createTasks(e) {
    e.preventDefault();
    e.stopPropagation();
    if (form.name.trim().length) {
      dispatch(axiosAddTask({ ...form, shouldAddValue }));
      setForm(INITIAL_STATE);
      dispatch(incrementCounterAction(form.list_id));
      e.target.reset();
    } else {
      setEmptyInput(true);
      setTimeout(() => setEmptyInput(false), 2000);
    }
  }

  return (
    <form name="task" className="create_form" onSubmit={createTasks}>
      <div className={`${showTaskContent ? "show_form" : ""}`}>
        <div className="form_title" onClick={handleTaskTitleClick}>
          Create New Task
        </div>
        <div className="form_body task_body">
          <div className={emptyInput ? "emptyInput show" : "emptyInput"}>
            <input
              className="name_input"
              type="text"
              placeholder="Title Task"
              name="name"
              onChange={handleChange}
            />
          </div>
          <textarea
            className="taskDescription_input"
            name="description"
            placeholder="Description"
            onChange={handleChange}
          />
          <select
            className="list_selection"
            name="list_id"
            onChange={handleChange}
          >
            {storeLists?.map((el) => (
              <option key={el.id} value={el.id}>
                List: {el.title}
              </option>
            ))}
          </select>
          <div className="form_footer">
            <input
              className="date_selection"
              name="due_date"
              type="date"
              onChange={handleChange}
            />
            <button
              className="createTask_button"
              onMouseDown={(e) => e.preventDefault()}
            >
              Create Task
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormCreateTask;
