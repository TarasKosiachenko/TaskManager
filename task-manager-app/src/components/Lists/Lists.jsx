import React from "react";
import "./Lists.scss";
import { NavLink } from "react-router-dom";

function Lists({ storeLists }) {
  return (
    <>
      {storeLists?.map((list) => (
        <NavLink
          to={"/lists/" + (list.id || list.list_id)}
          key={list.id || list.list_id}
          className={`list ${({ isActive }) => (isActive ? "active" : "")}`}
          // className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          {list.title} <span>{list.undone}</span>
        </NavLink>
      ))}
      <NavLink
        to={"/today"}
        className={`list ${({ isActive }) => (isActive ? "active" : "")}`}
      >
        Task Today
      </NavLink>
    </>
  );
}

export default Lists;
