import React from "react";
import "./TaskItem.scss";
import { СalendarIcon, TrashIcon } from "../../MyIcons/MyIcons";
import { useDispatch } from "react-redux";

import { axiosDeleteTask } from "../../asyncActions/tasks";
import { axiosUpdateTask } from "../../asyncActions/tasks";

import {
  decrementCounterAction,
  incrementCounterAction,
} from "../../store/dashboardReducer";

import Lists from "../Lists/Lists";

function TaskItem({ todo }) {
  const dispatch = useDispatch();

  function getFormatedDate(date) {
    if (date === null || date === "") {
      return "not specified";
    } else {
      date = new Date(date);
    }
    const values = [
      (date.getDate() < 10 ? "0" : "") + date.getDate(),
      (date.getMonth() + 1 < 10 ? "0" : "") + (date.getMonth() + 1),
      date.getFullYear() - 2000,
    ];
    return values.join(".");
  }

  function handleCheckboxChange() {
    dispatch(axiosUpdateTask(todo));
    if (todo.done) {
      dispatch(incrementCounterAction(todo.list_id));
    } else {
      dispatch(decrementCounterAction(todo.list_id));
    }
  }
  function deleteTask() {
    dispatch(axiosDeleteTask(todo.id));
    if (!todo.done) {
      dispatch(decrementCounterAction(todo.list_id));
    }
  }

  return (
    <>
      <li
        id={todo.id}
        className={
          (new Date(todo.due_date) < new Date(Date.now() - 3600 * 1000 * 24) &&
          todo.due_date !== null
            ? "overdue "
            : "") + (todo.done ? "done" : "")
        }
      >
        <div className="calendar">
          <СalendarIcon />
          <span>{getFormatedDate(todo.due_date)}</span>
        </div>

        <div>
          <input
            type="checkbox"
            onClick={handleCheckboxChange}
            className={todo.done ? "checkboxTask checked" : "checkboxTask"}
            defaultChecked={todo.done ? "checked" : ""}
          />
          <h5>{todo.name ? todo.name : ""}</h5>
        </div>

        <div>
          <p>{todo.description}</p>
        </div>
        <div className="delete_task" onClick={deleteTask}>
          <TrashIcon />
        </div>
        {todo.list ? (
          <div className="todayTaskList">
            list:
            <Lists storeLists={[todo.list]} />
          </div>
        ) : (
          ""
        )}
      </li>
    </>
  );
}

export default TaskItem;
