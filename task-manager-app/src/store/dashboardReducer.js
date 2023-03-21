const defaultState = {
  today: 0,
  lists: [],
  openedTasks: [],
};

const GET_LISTS = "GET_LISTS";
const ADD_LIST = "ADD_LIST";
const DELETE_LIST = "DELETE_LIST";
const INCREMENT_COUNTER = "INCREMENT_COUNTER";
const DECREMENT_COUNTER = "DECREMENT_COUNTER";

export const dashboard = (state = defaultState, action) => {
  switch (action.type) {
    case GET_LISTS:
      return {
        ...state,
        today: action.payload.today,
        lists: action.payload.list,
        openedTasks: action.payload.openedTasks,
      };
    case INCREMENT_COUNTER:
      return {
        ...state,
        lists: state.lists.map((el) => {
          return el.id === +action.payload
            ? { ...el, undone: el.undone + 1 }
            : el;
        }),
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        lists: state.lists.map((el) => {
          return el.id === +action.payload
            ? { ...el, undone: el.undone - 1 }
            : el;
        }),
      };

    case ADD_LIST:
        return {
          ...state,
          lists: [...state.lists, ...action.payload],
        };
    case DELETE_LIST:
      return {
        ...state,
        lists: state.lists.filter((list) => list.id !== action.payload),
      };

    default:
      return state;
  }
};

export const getListsCustomerAction = (payload) => ({
  type: GET_LISTS,
  payload,
});

export const incrementCounterAction = (payload) => ({
  type: INCREMENT_COUNTER,
  payload,
});

export const decrementCounterAction = (payload) => ({
  type: DECREMENT_COUNTER,
  payload,
});

export const addListCustomerAction = (payload) => {
  return {
    type: ADD_LIST,
    payload,
  }
};

export const deleteListCustomerAction = (payload) => ({
  type: DELETE_LIST,
  payload,
});
