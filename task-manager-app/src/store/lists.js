const ADD_LIST = "ADD_LIST";
const DELETE_LIST = "DELETE_LIST";

export const lists = (state = [], action) => {
  switch (action.type) {
    case ADD_LIST:
      if (action.payload.shouldAddValue) {
        return {
          ...state,
          lists: action.payload.list,
        };
      } else {
        return state;
      }
      case DELETE_LIST:
        return state.filter((list) => list.id !== action.payload);
    default:
      return state;
  }
};

export const addListCustomerAction = (payload) => ({
  type: ADD_LIST,
  payload,
});

export const deleteListCustomerAction = (payload) => ({
  type: DELETE_LIST,
  payload,
});