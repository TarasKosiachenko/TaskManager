import axios from "axios";
import { getListsCustomerAction } from "../store/dashboardReducer"
import { addListCustomerAction } from "../store/lists"

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