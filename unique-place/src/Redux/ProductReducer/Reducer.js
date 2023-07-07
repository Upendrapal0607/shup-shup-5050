import {
  DELETE_PRODUC_SUCCESS,
  GET_PRODUC_SUCCESS,
  POST_PRODUC_SUCCESS,
  PRODUC_FAILURE,
  PRODUC_REQUEST,
} from "./ActionType";

const initialState = {
  isLoading: false,
  Products: [],
  isError: false,
};

const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUC_REQUEST:
      return { ...state, isLoading: true };
    case GET_PRODUC_SUCCESS:
      return { ...state, isLoading: false, Products: payload, isError: false };
    case PRODUC_FAILURE:
      return { ...state, isLoading: false, Products: [], isError: true };
    case POST_PRODUC_SUCCESS:
      return {
        ...state,
        isLoading: false,
        Products: [...state.Products, payload],
        isError: false,
      };
    case DELETE_PRODUC_SUCCESS:
      return {
        ...state,
        isLoading: false,
        Products: state.Products.filter((item) => item.id != payload),
      };
    default:
      return state;
  }
};

export { Reducer };
