import { createAction } from "redux-actions";
export const COUNTER_CHANGE = "COUNTER_CHANGE";

export function changeCount(count) {
  return {
    type: COUNTER_CHANGE,
    payload: count,
  };
}
