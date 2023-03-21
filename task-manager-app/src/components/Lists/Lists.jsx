import React from "react";
import "./Lists.scss";
import { TrashIcon } from "../../MyIcons/MyIcons";
import { NavLink } from "react-router-dom";

function Lists({ storeLists }) {
  return (
    <div>
      {storeLists?.map((list) => (
        <NavLink
          to={"/lists/" + (list.id || list.list_id)}
          key={list.id || list.list_id}
          className={`list ${(isActive) => isActive && "active"}`}
        >
          <TrashIcon />
          <p>{list.title}</p>
          <span>{list.undone}</span>
        </NavLink>
      ))}
    </div>
  );
}

export default Lists;
