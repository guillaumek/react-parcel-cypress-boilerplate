import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";

import thunk from "redux-thunk";
import combinedRootReducer from "./reducers";

const logger = createLogger();

// const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(combinedRootReducer, initialState);

  return store;
}
