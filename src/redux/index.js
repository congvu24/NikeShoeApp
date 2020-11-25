import { createAction } from "redux-actions";
import * as type from "./type";

export const counterIncrease = createAction(type.INCREASE);
export const counterDecrease = createAction(type.DECREASE);
export const setLoading = createAction(type.SETLOADING);
export const addCart = createAction(type.ADD_CART);
export const removeCart = createAction(type.REMOVE_CART);
export const clearCart = createAction(type.CLEAR_CART);
export const setAddress = createAction(type.SET_ADDRESS);
export const addAddress = createAction(type.ADD_ADDRESS);
export const setCoupon = createAction(type.SET_COUPON);
export const loginSuccess = createAction(type.LOGIN);
export const addHistory = createAction(type.ADD_HISTORY);
export const addBookmark = createAction(type.ADD_BOOKMARK);
export const removeBookmark = createAction(type.REMOVE_BOOKMARK);
export const setViewIntroduce = createAction(type.SET_VIEW_INTRODUCE);
export const reset = createAction(type.RESET);
export const logout = createAction(type.LOGOUT);
export const checkoutSuccess = createAction(type.CHECKOUT);

export const checkout = (callback) => {
  return (dispatch) => {
    dispatch(setLoading("Checking out"));
    setTimeout(() => {
      dispatch(setLoading(""));
      dispatch(checkoutSuccess());
      callback();
      dispatch(clearCart());
    }, 2000);
  };
};

export const login = ({ username, password, callback }) => {
  return (dispatch) => {
    dispatch(setLoading("Logging in"));
    setTimeout(() => {
      dispatch(setLoading(""));
      dispatch(loginSuccess({ username, password }));
      callback();
    }, 2000);
  };
};

export const register = ({ username, password }) => {
  return (dispatch) => {
    // dispatch(setLoading("Logging in"));
  };
};
