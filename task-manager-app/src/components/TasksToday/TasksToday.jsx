import React, { useEffect } from "react";

import TaskItem from "../TaskItem/TaskItem";

import { axiosGetTodayTasks } from "../../asyncActions/tasks";
import { useDispatch, useSelector } from "react-redux";

function TasksToday() {
  const dispatch = useDispatch();
  const storeTodayTasks = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(axiosGetTodayTasks());
  }, [dispatch]);

  return (
    <>
      <ul className="tasks-list">
      <span className="indent"></span>
        {storeTodayTasks.map((todo) => (
          <TaskItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
}

export default TasksToday;
