import { LOGIN, LOG_OUT } from "./actionTypes";

export const login = (
  { email, password, rememberMe },
  { setLoading, dispatchAuth }
) => {
  setLoading(true);
  setTimeout(() => {
    setLoading(false);
    dispatchAuth({
      type: LOGIN,
      payload: { email, password, rememberMe },
    })}, 3000)
};

export const logout = (dispatch) => (dispatch({ type: LOG_OUT }));
