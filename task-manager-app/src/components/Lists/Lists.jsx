import React from "react";
import "./Lists.scss";
import { TrashIcon } from "../../MyIcons/MyIcons";
import { NavLink } from "react-router-dom";

import { axiosDeleteList } from "../../asyncActions/lists";

import { useDispatch } from "react-redux";

function Lists({ storeLists }) {

  const dispatch = useDispatch();

  function deleteList(id) {
    dispatch(axiosDeleteList(id))
  }

  return (
    <div>
      {storeLists?.map((list) => (
        <NavLink
          to={"/lists/" + (list.id || list.list_id)}
          key={list.id || list.list_id}
          className={`list ${(isActive) => isActive && "active"}`}
        >
          <div className="delete_list" onClick={() => deleteList(list.id)}>
            <TrashIcon />
          </div>
          <p>{list.title}</p>
          <span>{list.undone}</span>
        </NavLink>
      ))}
    </div>
  );
}

export default Lists;
