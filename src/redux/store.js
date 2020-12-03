import { createStore, applyMiddleware } from "redux";
import { AsyncStorage } from "react-native";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import reducers from "./reducers";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);

export default store;
