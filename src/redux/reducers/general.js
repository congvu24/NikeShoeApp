import { handleActions } from "redux-actions";
import * as type from "../type";
import addresses from "../../data/address";
import coupons from "../../data/coupons";
import { act } from "react-test-renderer";

const initialState = {
  count: 0,
  isLoading: false,
  selectedAddress: addresses[0],
  addresses,
  selectedCoupon: "",
};

const reducer = handleActions(
  {
    [type.INCREASE]: (state, action) => ({
      ...state,
      count: state.count + 1,
    }),
    [type.DECREASE]: (state, action) => ({
      ...state,
      count: state.count - 1,
    }),
    [type.SET_ADDRESS]: (state, action) => ({
      ...state,
      selectedAddress: action.payload,
    }),
    [type.ADD_ADDRESS]: (state, action) => {
      return {
        ...state,
        addresses: [...state.addresses, action.payload],
      };
    },
    [type.SET_COUPON]: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        selectedCoupon: action.payload,
      };
    },
  },
  initialState
);

export default reducer;
