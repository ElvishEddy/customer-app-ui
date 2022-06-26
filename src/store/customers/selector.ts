import { RootState } from "./../store";
import { createSelector } from "@reduxjs/toolkit";

const selectSelf = (state: RootState) => state.customer;
export const selector = {
  selectData: createSelector(selectSelf, (state) => state.data),
  selectUserInfo: createSelector(selectSelf, (state) => state.userInfo),
};
