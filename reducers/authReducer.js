import { LOGIN, LOG_OUT } from "../actions/actionTypes";

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
      case LOG_OUT:
      return initAuth;
    default:
      return state;
  }
};

export default authReducer;
