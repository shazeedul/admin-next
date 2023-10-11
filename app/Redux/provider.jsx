"use client";

import { Provider } from "react-redux";
import { persistStore } from "redux-persist";

import { PersistGate } from "redux-persist/integration/react";
import store from "./store";

export function ReduxProviders({ children }) {
  let persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={<div className="flex items-center justify-center h-screen bg-white text-black">Loading...</div>} persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
}
