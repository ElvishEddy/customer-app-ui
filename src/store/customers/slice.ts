import { createAsyncThunk, createSlice, Slice } from "@reduxjs/toolkit";

import { NewCustomerParams } from "@/components/customers";
import { SettingsProps } from "@/components/settings";
import {
  fecthLogout,
  fetchAddNewCustomer,
  fetchDeleteCustomer,
  fetchEditCustomer,
  fetchLogin,
  fetchUpdateUser,
  getAllUsersData,
} from "./api";
import { loginParams, State } from "./type";

const initialState: State = {
  data: [],
  userInfo: null,
};

export const fecthCustomer = createAsyncThunk("fecthCustomer", async () => {
  try {
    const response = await getAllUsersData();
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const addNewCustomer = createAsyncThunk(
  "addNewCustomer",
  async (payload: NewCustomerParams) => {
    try {
      const response = await fetchAddNewCustomer(payload);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const editCustomer: any = createAsyncThunk(
  "editCustomer",
  async (customerId: number, payload: NewCustomerParams | any) => {
    try {
      const response = await fetchEditCustomer(customerId, payload);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateUserInfo = createAsyncThunk(
  "updateUserInfo",
  async (payload: SettingsProps) => {
    try {
      const response = await fetchUpdateUser(payload);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteCustomer = createAsyncThunk(
  "deleteCustomer",
  async (customerId: number) => {
    try {
      const response = await fetchDeleteCustomer(customerId);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const login = createAsyncThunk("login", async (payload: loginParams) => {
  try {
    const response = await fetchLogin(payload);

    if (typeof window !== undefined) {
      localStorage.setItem("token", response.data.token);
    } else {
      return null;
    }

    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const logout = createAsyncThunk("logout", async () => {
  try {
    const response = await fecthLogout();
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const slice: Slice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setData: (state, action) => ({ ...state, data: action.payload }),
    setUserInfo: (state, action) => ({ ...state, userInfo: action.payload }),
    setUserInfoDetail: (state, action) => ({
      ...state,
      userInfoDetail: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(fecthCustomer.fulfilled, (state, action) => {
      state.data = action.payload;
    }),
      builder.addCase(login.fulfilled, (state, action) => {
        state.userInfo = action.payload;
      }),
      builder.addCase(logout.fulfilled, (state, action) => {
        state.userInfo = action.payload;
      });
    builder.addCase(addNewCustomer.fulfilled, (state, action) => {
      state.data.push(action.payload);
    }),
      builder.addCase(updateUserInfo.fulfilled, (state, action) => {
        state.userInfo = action.payload;
      }),
      builder.addCase(editCustomer.fulfilled, (state, action) => {}),
      builder.addCase(deleteCustomer.fulfilled, (state, action) => {
        state.data.slice(1, action.payload);
      });
  },
});

export const actions = {
  ...slice.actions,
  fecthCustomer,
  addNewCustomer,
  updateUserInfo,
  editCustomer,
  deleteCustomer,
  login,
  logout,
};

export const { reducer } = slice;
