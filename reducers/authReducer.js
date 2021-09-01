import { LOGIN } from "../actions/actionTypes";

export const initAuth = {
  firstName: "",
  lastName: "",
  email: "",
  isLoggedIn: false,
};

const authReducer = (state = initAuth, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        email: action.payload.email,
        isLoggedIn: true,
        rememberMe: action.payload.rememberMe,
      };
    default:
      return state;
  }
};

export default authReducer;
