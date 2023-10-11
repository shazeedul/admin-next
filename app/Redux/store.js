"use client";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./Features/Auth/authSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults


const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
