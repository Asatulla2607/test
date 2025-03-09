/* eslint-disable no-case-declarations */
const initialState = {
  product: JSON.parse(localStorage.getItem("product")) || [],
  basket: JSON.parse(localStorage.getItem("basket")) || [],
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      let result = [...state.product, action.payload];
      localStorage.setItem("product", JSON.stringify(result));
      return { ...state, product: result };
    case "ADD_TO_BASKET":
      let findBasket = state.basket.find((el) => el.id === action.payload.id);
      if (findBasket) {
        return {
          ...state,
          basket: state.basket.map((el) =>
            el.id === action.payload.id
              ? { ...el, quantity: el.quantity + 1 }
              : el
          ),
        };
      } else {
        let res = [...state.basket, action.payload];
        localStorage.setItem("basket", JSON.stringify(res));
        return { ...state, basket: res };
      }
    case "INCREMENT_QUATITY":
      return {
        state,
        basket: state.basket.map((el) =>
          el.id === action.payload.id
            ? { ...el, quantity: el.quantity + 1 }
            : el
        ),
      };
    case "DECREMENT_QUANTITY":
      return {
        ...state,
        basket: state.basket.map((el) =>
          el.id === action.payload.id
            ? { ...el, quantity: el.quantity > 1 ? el.quantity - 1 : 1 }
            : el
        ),
      };
    case "DELETE_BASKET":
      let deleteBasket = state.basket.filter(
        (el) => el.id !== action.payload.id
      );
      localStorage.setItem("basket", JSON.stringify(deleteBasket));
      return { ...state, basket: deleteBasket };
    default:
      return state;
  }
};
