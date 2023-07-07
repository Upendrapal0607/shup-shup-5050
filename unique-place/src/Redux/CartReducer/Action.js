import axios from "axios";
import {
  CART_DELETE_PRODUC_SUCCESS,
  CART_GET_PRODUC_SUCCESS,
  CART_POST_PRODUC_SUCCESS,
} from "./ActionType";
const url = "http://localhost:8080/cart";
export const Addtocart = (payload) => async (dispatch) => {
  await axios.post(`${url}`, payload).then((res) => {
    dispatch({ type: CART_POST_PRODUC_SUCCESS, payload: res.data });
  });
};

export const GetCartProduct = () => async (dispatch) => {
  try {
    await axios.get(url).then((res) => {
      dispatch({ type: CART_GET_PRODUC_SUCCESS, payload: res.data });
    });
  } catch (error) {
    console.log("error-->", error);
  }
};

export const Deletecartproduct = (id) => async (dispatch) => {
  await axios.delete(`${url}/${id}`).then((res) => {
    dispatch({ type: CART_DELETE_PRODUC_SUCCESS, payload: id });
  });
};
