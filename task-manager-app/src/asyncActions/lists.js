import axios from "axios";
import { getListsCustomerAction } from "../store/dashboardReducer"
import { addListCustomerAction, deleteListCustomerAction } from "../store/lists"

export const axiosGetLists = () => {
    return function (dispatch) {
        axios.get("http://localhost:5000/dashboard")
            .then(response => dispatch(getListsCustomerAction(response.data)))
    }
}

export const axiosAddList = ({ ...form }) => {
    return function (dispatch) {
      axios
        .post("http://localhost:5000/lists", form)
        .then((response) =>
          dispatch(
            addListCustomerAction({ ...response.data[0] })
          )
        );
    };
}

export const axiosDeleteList = (id) => {
  return function (dispatch) {
    axios
      .delete("http://localhost:5000/lists/" + id)
      .then((response) =>
        dispatch(deleteListCustomerAction(response.data[0].id))
      );
  };
};