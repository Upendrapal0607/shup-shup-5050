import axios from "axios";
import {
  DELETE_PRODUC_SUCCESS,
  GET_PRODUC_SUCCESS,
  POST_PRODUC_SUCCESS,
  PRODUC_FAILURE,
  PRODUC_REQUEST,
} from "./ActionType";

const url = "http://localhost:8080/products";

export const Getproducsuccess = (payload) => async (dispatch) => {
  try {
    dispatch({ type: PRODUC_REQUEST });
    await axios.get(url, payload).then((res) => {
      dispatch({ type: GET_PRODUC_SUCCESS, payload: res.data });
    });
  } catch (error) {
    dispatch({ type: PRODUC_FAILURE });
  }
};

export const Postproducsuccess = (payload) => async (dispatch) => {
  console.log("payload", payload);
  try {
    dispatch({ type: PRODUC_REQUEST });
    await axios.post(url, payload).then((res) => {
      console.log("res", res.data);
      dispatch({ type: POST_PRODUC_SUCCESS, payload: res.data });
    });
  } catch (error) {
    dispatch({ type: PRODUC_FAILURE });
  }
};

export const Patchproductsuccess = (payload, id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUC_REQUEST });
    return await axios.patch(`${url}/${id}`, payload);
  } catch (error) {
    dispatch({ type: PRODUC_FAILURE });
  }
};

export const Deleteproductsuccesfull = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUC_REQUEST });
    await axios.delete(`${url}/${id}`).then((res) => {
      dispatch({ type: DELETE_PRODUC_SUCCESS, payload: id });
    });
  } catch (error) {
    dispatch({ type: PRODUC_FAILURE });
  }
};
