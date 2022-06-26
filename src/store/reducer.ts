import { combineReducers } from "@reduxjs/toolkit";
import { reducer as customerReducer } from "./customers";

export const reducer = combineReducers({
  customer: customerReducer,
});
