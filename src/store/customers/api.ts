import { NewCustomerParams } from "@/components/customers";
import { SettingsProps } from "@/components/settings";
import { axiosApi } from "@/server";
import { loginParams } from "./type";

const { get, post, put } = axiosApi;

const getToken = () => {
  let token;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }
  return `Bearer ` + token;
};

export const getAllUsersData = () => {
  return get(`/customers`);
};

export const getUserById = (id: number | undefined | string | string[]) => {
  return get(`/customers/${id}`);
};

export const fetchLogin = ({ email, password }: loginParams) => {
  return post(`/login`, {
    email,
    password,
  });
};

export const fecthLogout = () => {
  return post(`/logout`);
};

export const fetchUpdateUser = ({
  currentEmail,
  newEmail,
  password,
  numberPerpage,
}: SettingsProps) => {
  return post(
    `/users`,
    {
      currentEmail,
      newEmail,
      password,
      numberPerpage,
    },
    {
      headers: {
        Authorization: getToken(),
      },
    }
  );
};

export const fetchAddNewCustomer = ({
  firstName,
  lastName,
  city,
  address,
  state,
}: NewCustomerParams) => {
  return post(
    `/customers`,
    {
      firstName,
      lastName,
      city,
      address,
      state,
    },
    {
      headers: {
        Authorization: getToken(),
      },
    }
  );
};

export const fetchEditCustomer = (
  customerId: number,
  { firstName, lastName, city, address, state }: NewCustomerParams
) => {
  return put(
    `/customers/${customerId}`,
    {
      firstName,
      lastName,
      city,
      address,
      state,
    },
    {
      headers: {
        Authorization: getToken(),
      },
    }
  );
};

export const fetchDeleteCustomer = (customerId: number) => {
  return axiosApi.delete(`/customers/${customerId}`, {
    headers: {
      Authorization: getToken(),
    },
  });
};
