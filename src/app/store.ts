import { configureStore, Action } from "@reduxjs/toolkit";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ThunkAction } from "redux-thunk";

import rootReducer, { RootState } from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
});

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./rootReducer", () => {
    // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
    const newRootReducer = require("./rootReducer").default;
    store.replaceReducer(newRootReducer);
  });
}

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
