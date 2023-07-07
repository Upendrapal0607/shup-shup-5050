import {
  AUTH_POST_FAILURE,
  AUTH_POST_REQUEST,
  AUTH_POST_SUCCESS,
  LOG_OUT,
} from "./ActionType";

const InitialState = {
  isLoading: false,
  isError: false,
  token: "",
  isAuth: false,
};

const Reducer = (state = InitialState, { type, payload }) => {
  switch (type) {
    case AUTH_POST_REQUEST:
      return { ...state, isLoading: true };
    case AUTH_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: payload,
        isError: false,
        isAuth: true,
      };
    case AUTH_POST_FAILURE:
      return {
        ...state,
        isLoading: false,
        token: "",
        isError: true,
        isAuth: false,
      };
    case LOG_OUT:
      return {
        ...state,
        isLoading: false,
        token: "",
        isError: false,
        isAuth: false,
      };
    default:
      return state;
  }
};

export { Reducer };
