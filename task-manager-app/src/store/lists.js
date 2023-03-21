const ADD_LIST = "ADD_LIST";

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
    default:
      return state;
  }
};

export const addListCustomerAction = (payload) => ({
  type: ADD_LIST,
  payload,
});
