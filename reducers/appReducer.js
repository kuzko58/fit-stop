import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from "../actions/actionTypes";

export const initApp = {
  basket: [],
  basketCount: 0,
  basketTotal: 0,
};

export const renderBasket = (basket) => {
  const basketWithCount = basket.reduce((acc, curr) => {
    return (
      (acc[curr.id] = {
        item: curr,
        count: ((acc[curr.id] && acc[curr.id].count) || 0) + 1,
      }),
      acc
    );
  }, {});
  const formattedBasket = Object.entries(basketWithCount).map(
    (entry) => entry[1]
  );
  return formattedBasket;
};

const appReducer = (state = initApp, action) => {
  switch (action.type) {
    case ADD_TO_BASKET: {
      const productIndex = state.basket.findIndex(
        (basketItem) => basketItem.product.id === action.payload.product.id
      );
      let cloneBasket = [...state.basket];

      if (productIndex >= 0) {
        cloneBasket[productIndex] = action.payload;
      } else {
        cloneBasket.push(action.payload);
      }

      let basketCount = 0;
      let basketTotal = 0;

      if (cloneBasket.length === 1) {
        basketCount = cloneBasket[0].quantity;
        basketTotal =
          cloneBasket[0].quantity * Number(cloneBasket[0].product.price);
      }
      if (cloneBasket.length > 1) {
        basketCount = cloneBasket.reduce((acc, curr) => {
          return (acc.quantity || acc) + curr.quantity;
        });

        basketTotal = cloneBasket.reduce((acc, curr) => {
          return (
            Number(acc.product?.price || acc) * (acc.quantity || 1) +
            Number(curr.product.price) * curr.quantity
          );
        });
      }

      return {
        ...state,
        basket: cloneBasket,
        basketCount,
        basketTotal,
      };
    }
    case REMOVE_FROM_BASKET: {
      console.log(action.payload);
      const productIndex = state.basket.findIndex(
        (basketItem) => basketItem.product.id === action.payload.product.id
      );
      let cloneBasket = [...state.basket];

      if (productIndex >= 0) {
        cloneBasket.splice(productIndex, 1);
      } else {
        console.warn(
          `Can not remove product (id: ${action.payload?.product?.id}) as it is not in the basket!`
        );
      }

      let basketCount = 0;
      let basketTotal = 0;

      if (cloneBasket.length === 1) {
        basketCount = cloneBasket[0].quantity;
        basketTotal =
          cloneBasket[0].quantity * Number(cloneBasket[0].product.price);
      }
      if (cloneBasket.length > 1) {
        basketCount = cloneBasket.reduce((acc, curr) => {
          return (acc.quantity || acc) + curr.quantity;
        });

        basketTotal = cloneBasket.reduce((acc, curr) => {
          return (
            Number(acc.product?.price || acc) * (acc.quantity || 1) +
            Number(curr.product.price) * curr.quantity
          );
        });
      }
      return {
        ...state,
        basket: cloneBasket,
        basketCount,
        basketTotal,
      };
    }
    default:
      return state;
  }
};

export default appReducer;
