import { handleActions } from "redux-actions";
import * as type from "../type";

// const initialState = {
//     id: {number: 20}
// };
const initialState = {
  // 1: { number: 20 },
};

const reducer = handleActions(
  {
    [type.ADD_CART]: (state, action) => {
      return {
        ...state,
        [action.payload.id]: { number: state[action.payload.id] ? state[action.payload.id].number + 1 : 1 },
      };
    },
    [type.REMOVE_CART]: (state, action) => ({
      ...state,
      [action.payload.id]: { number: state[action.payload.id].number > 1 ? state[action.payload.id].number - 1 : 0 },
    }),
    [type.CLEAR_CART]: (state, action) => {
      return initialState;
    },
    [type.RESET]: (state, action) => {
      return initialState;
    },
    [type.REMOVE_ITEM_FROM_CART]: (state, action) => {
      return {
        ...state,
        [action.payload]: { number: 0 },
      };
    },
  },
  initialState
);

export default reducer;
