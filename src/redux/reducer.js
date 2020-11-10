import { COUNTER_CHANGE } from "./action";
const initialState = {
  count: 0,
  isLoading: false,
};
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTER_CHANGE:
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
  }
};
export default countReducer;
