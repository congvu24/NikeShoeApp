import React from "react";
// import AppNavigator from "./AppNavigator";
import { Provider } from "react-redux";
import { Text, AppState, View } from "react-native";
import { applyMiddleware, createStore } from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

import reducers from "./reducer";

export const loadState = () => {
  try {
    const serializedState = AsyncStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch {
    // ignore write errors
  }
};

const persistedState = loadState();
const store = createStore(reducers);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;

// import { createStore, applyMiddleware } from "redux";
// // import createSagaMiddleware from "redux-saga";

// import reducer from "./reducer";
// // import mySaga from "./sagas";

// // create the saga middleware
// // const sagaMiddleware = createSagaMiddleware();
// // mount it on the Store
// const store = createStore(reducer);

// // then run the saga
// // sagaMiddleware.run(mySaga);

// export default store;

// import { createStore, combineReducers } from "redux";
// import countReducer from "./reducer";
// const rootReducer = combineReducers({ count: countReducer });
// const configureStore = () => {
//   return createStore(rootReducer);
// };
// export default configureStore;
