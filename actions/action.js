import { ADD_TO_BASKET, REMOVE_FROM_BASKET, SET_USER } from "./actionTypes";

export const addToBasket = (dispatch, item) => {
  dispatch({
    type: ADD_TO_BASKET,
    item,
  });
};

export const removeFromBasket = (dispatch, id) => {
  dispatch({
    type: REMOVE_FROM_BASKET,
    id,
  });
};

export const setUser = (dispatch, user) => {
  dispatch({
    type: SET_USER,
    user,
  });
};
