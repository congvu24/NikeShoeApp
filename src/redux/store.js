import { createStore, applyMiddleware } from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import reducers from "./reducers";

export const loadState = async () => {
  try {
    const serializedState = await AsyncStorage.getItem("state");
    console.log("new state", JSON.parse(serializedState));
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    AsyncStorage.setItem("state", serializedState);
  } catch (e) {
    console.log(e);
    // ignore write errors
  }
};
// const persistedState = loadState();
// console.log("persis:", persistedState);
const store = createStore(reducers);

// store.subscribe(() => {
//   saveState(store.getState());
//   console.log("thay doi", store.getState());
// });
export default store;
