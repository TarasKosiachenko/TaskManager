import axios from "axios";
import {
  getListsCustomerAction,
  addListCustomerAction,
  deleteListCustomerAction,
} from "../store/dashboardReducer";

export const axiosGetLists = () => {
  return function (dispatch) {
    axios
      .get("http://localhost:5000/dashboard")
      .then((response) => dispatch(getListsCustomerAction(response.data)));
  };
};

export const axiosAddList = ({ ...form }) => {
  return function (dispatch) {
    axios
      .post("http://localhost:5000/lists", form)
      .then((response) =>
          dispatch(addListCustomerAction(response.data))
      );
  };
};

export const axiosDeleteList = (id) => {
  return function (dispatch) {
    axios
      .delete("http://localhost:5000/lists/" + id)
      .then((response) => dispatch(deleteListCustomerAction(id)));
  };
};
