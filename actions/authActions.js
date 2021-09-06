import { LOGIN } from "./actionTypes";

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
