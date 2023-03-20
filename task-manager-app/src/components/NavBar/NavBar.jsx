import React, { useEffect } from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";
import Lists from "../Lists/Lists";
import { LogoIcon } from "../../MyIcons/MyIcons"
import FormCreateTask from "../FormCreateTask/FormCreateTask";
import { axiosGetLists } from "../../asyncActions/lists";
import { useDispatch, useSelector } from "react-redux";

const NavBar = () => {
  const dispatch = useDispatch();
  const storeLists = useSelector((state) => state.dashboard.lists);

  useEffect(() => {
    dispatch(axiosGetLists());
  }, [dispatch]);

  return (
    <nav>
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
        <Lists storeLists={storeLists} />
        <FormCreateTask />
      </div>
    </nav>
  );
};

export default NavBar;
