import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { Reducer as ProductReducer } from "./ProductReducer/Reducer";
import { Reducer as CartReducer } from "./CartReducer/Reducer";
import { Reducer as AuthReducer } from "./AuthReducer/Reducer";
const rootReducer = combineReducers({
  AuthReducer,
  ProductReducer,
  CartReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
