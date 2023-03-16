import React, { useState, useMemo } from "react";
import "./FormCreateTask.scss";
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
    if (form.name.length) {
      dispatch(axiosAddTask({ ...form, shouldAddValue }));
      setForm(INITIAL_STATE);
      dispatch(incrementCounterAction(form.list_id));
      e.target.reset();
    } else {
      alert("please enter the task name");
      e.target[0].className = "form-control emptyInput";
      setTimeout(() => (e.target[0].className = "form-control"), 2000);
    }
  }

  return (
    <form
      name="task"
      className="mb-3"
      onSubmit={createTasks}
      style={{ width: "100%" }}
    >
      Create New Task
      <div className="mb-2">
        <input
          className="form-control input_name"
          type="text"
          placeholder="Title"
          name="name"
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <textarea
          className="form-control"
          name="description"
          placeholder="Description"
          cols="40"
          rows="5"
          onChange={handleChange}
        />
      </div>

      <select className="mb-2" name="list_id" onChange={handleChange}>
        {storeLists?.map((el) => (
          <option key={el.id} value={el.id}>
            list: {el.title}
          </option>
        ))}
      </select>

      <div className="form-date-btn-create">
        <div>
          <input
            className="form-control"
            name="due_date"
            type="date"
            style={{ width: "140px" }}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          variant="outline-secondary"
          onMouseDown={(e) => e.preventDefault()}
        >
          Create
        </button>
      </div>
    </form>
  );
};

export default FormCreateTask;
