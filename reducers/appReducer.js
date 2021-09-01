import { GET_USERS, GET_VOUCHERS } from "../actions/actionTypes";

export const initApp = {
  users: [],
  vouchers: [],
};

const appReducer = (state = initApp, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case GET_VOUCHERS:
      return {
        ...state,
        vouchers: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
