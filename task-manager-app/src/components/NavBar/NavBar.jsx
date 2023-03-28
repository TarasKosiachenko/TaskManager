import React, { useState, useEffect } from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";
import Lists from "../Lists/Lists";
import { LogoIcon, MobileArrow } from "../../MyIcons/MyIcons";
import FormCreateTask from "../FormCreateTask/FormCreateTask";
import FormCreateList from "../FormCreateTask/FormCreateList";

import { axiosGetLists } from "../../asyncActions/lists";
import { useDispatch, useSelector } from "react-redux";

import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [activeBar, setActiveBar] = useState(false);

  const dispatch = useDispatch();
  const storeLists = useSelector((state) => state.dashboard.lists);

  function handleClick() {
    setActiveBar(!activeBar);
  }

  useEffect(() => {
    dispatch(axiosGetLists());
  }, [dispatch, storeLists.length]);

  return (
    <nav className={`${activeBar ? "show_bar" : ""}`}>
      <div className="shadow_layer" />
      <div className="navBar_wrapper">
        <span className="navMobile_arrow" onClick={handleClick}>
          <MobileArrow />
        </span>
        <div className="navBar_header">
          <div className="app_logo">
            <Link to="/">
              <LogoIcon width={40} height={30} />
            </Link>
          </div>
          <div className="app_title">
            <p>Task Manager</p>
          </div>
        </div>
        <div className="navBar_body">
          <div className="lists">
            <NavLink
              to={"/today"}
              className={`list ${(isActive) => isActive && "active"}`}
            >
              Task Today
            </NavLink>
            <Lists storeLists={storeLists} />
          </div>
          <div>
            <FormCreateList />
            <FormCreateTask />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
