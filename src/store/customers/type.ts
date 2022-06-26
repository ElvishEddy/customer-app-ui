export interface OrdersType {
  productName: string;
  itemCost: number;
}

export interface StateType {
  abbreviation: string;
  name: string;
}

export interface CustomerType {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  address: string;
  city: string;
  state: StateType;
  orders: OrdersType[];
}

export interface UserType {
  id: number;
  email: string;
  password: string;
  numberPerPage: number;
  token: string;
}
export interface loginParams {
  email: string;
  password: string;
}

export interface State {
  data: CustomerType[];
  userInfo: UserType | null;
}
