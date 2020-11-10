import { handleActions } from "redux-actions";
import * as type from "./type";

const initialState = {
  count: 0,
  isLoading: false,
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
  },
  initialState
);

export default reducer;
