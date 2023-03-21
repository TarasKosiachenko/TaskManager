import React, { useState } from "react";
import "./FormCreate.scss";

import { useDispatch } from "react-redux";

import { axiosAddList } from "../../asyncActions/lists";

const INITIAL_STATE = {
  title: "",
};

const FormCreateList = () => {
  const [form, setForm] = useState(INITIAL_STATE);
  const [emptyInput, setEmptyInput] = useState(false);
  const [showListContent, setShowListContent] = useState(false);

  const handleListTitleClick = () => {
    setShowListContent(!showListContent);
  };

  const dispatch = useDispatch();

  function handleChange(e) {
    setForm((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  }

  function createLists(e) {
    e.preventDefault();
    e.stopPropagation();
    if (form.title.trim().length) {
      dispatch(axiosAddList({ ...form }));
      setForm(INITIAL_STATE);
      e.target.reset();
    } else {
      setEmptyInput(true);
      setTimeout(() => setEmptyInput(false), 2000);
    }
  }

  return (
    <form name="task" className="create_form" onSubmit={createLists}>

      <div className={`${showListContent ? "show_form" : ""}`}>
        <div className="form_title" onClick={handleListTitleClick}>
          Create New List
        </div>
        <div className="form_body list_body">
          <div className={emptyInput ? "emptyInput show" : "emptyInput"}>
            <input
              className="name_input"
              type="text"
              placeholder="Title List"
              name="title"
              onChange={handleChange}
            />
            <button
              className="createTask_button"
              onMouseDown={(e) => e.preventDefault()}
            >
              Create List
            </button>
          </div>
        </div>
      </div>

    </form>
  );
};

export default FormCreateList;
