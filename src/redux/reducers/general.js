import { handleActions } from "redux-actions";
import * as type from "../type";
import addresses from "../../data/address";
import coupons from "../../data/coupons";
import { act } from "react-test-renderer";
import users from "../../data/users";

const initialState = {
  count: 0,
  isLoading: false,
  selectedAddress: addresses[0],
  addresses,
  selectedCoupon: "",
  isLogin: false,
  user: "",
  history: [],
  bookmark: {},
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
      return {
        ...state,
        selectedCoupon: action.payload,
      };
    },
    [type.LOGIN]: (state, action) => {
      if (action.payload.username == "congvu24" && action.payload.password == "congvu24") {
        console.log(action.payload.username, action.payload.password);
        return {
          ...state,
          isLogin: true,
          user: users,
        };
      } else return { ...state };
    },
    [type.ADD_HISTORY]: (state, action) => {
      const id = action.payload;
      if (!state.history.includes(id)) {
        return {
          ...state,
          history: [...state.history, id],
        };
      } else {
        // const index = state.history.indexOf(id);
        // let newHistory = state.history;
        // newHistory.splice(index, 1);
        // return { ...state, history: [...newHistory] };
        return { ...state };
      }
    },
    [type.ADD_BOOKMARK]: (state, action) => {
      const id = action.payload;
      return { ...state, bookmark: { ...state.bookmark, [id]: state.bookmark[id] ? !state.bookmark[id] : true } };
    },
  },
  initialState
);

export default reducer;
