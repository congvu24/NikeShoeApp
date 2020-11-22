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
export const login = createAction(type.LOGIN);
export const addHistory = createAction(type.ADD_HISTORY);
export const addBookmark = createAction(type.ADD_BOOKMARK);
export const removeBookmark = createAction(type.REMOVE_BOOKMARK);
