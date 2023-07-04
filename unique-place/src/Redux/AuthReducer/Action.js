import {
  AUTH_POST_FAILURE,
  AUTH_POST_REQUEST,
  AUTH_POST_SUCCESS,
} from "./ActionType";
import axios from "axios";
const url="https://reqres.in/api/login"
export const GetAuthntication = (payload) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_POST_REQUEST });
    await axios.post(url, payload).then((res) => {
      dispatch({ type: AUTH_POST_SUCCESS, payload: res.data.token });
    });
  } catch (error) {
    dispatch({ type: AUTH_POST_FAILURE, payload: error });
  }
};
