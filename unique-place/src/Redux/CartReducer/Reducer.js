import {
  CART_DELETE_PRODUC_SUCCESS,
  CART_GET_PRODUC_SUCCESS,
  CART_POST_PRODUC_SUCCESS,
} from "./ActionType";

const initialState = {
  cart: [],
};
const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CART_GET_PRODUC_SUCCESS:
      return { ...state, cart: payload };
    case CART_POST_PRODUC_SUCCESS:
      return { ...state, cart: [...state.cart, payload] };
    case CART_DELETE_PRODUC_SUCCESS:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id != payload),
      };
    default:
      return state;
  }
};

export { Reducer };
