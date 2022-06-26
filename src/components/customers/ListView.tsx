import { useDispatch, useSelector } from "react-redux";
import React, { useContext, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Table } from "antd";
import type { ColumnsType } from "antd/lib/table";

import { customerAction, customerSelector } from "@/store";
import { fecthCustomer } from "@/store/customers";
import { AppDispatch } from "@/store/store";
import { formatNumber, formatName } from "@/utils";
import { SearchValueContext } from "../layout/CustomerLayout";

interface DataType {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  address: string;
  city: string;
  orders: [
    {
      itemCost: number;
      productName: string;
    }
  ];
  state: {
    abbreviation: string;
    name: string;
  };
}

export const ListView = () => {
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector(customerSelector.selectData);

  useEffect(() => {
    dispatch(customerAction.fecthCustomer());
  }, []);

  const textSearch = useContext(SearchValueContext);

  const newData = data.filter(
    (item: any) =>
      item.firstName.toLowerCase().includes(textSearch.toLowerCase()) ||
      item.lastName.toLowerCase().includes(textSearch.toLowerCase())
  );
  const columns: ColumnsType<DataType> = [
    {
      title: "",
      dataIndex: "image",
      key: "image",
      render: (_, { id, gender }) => (
        <Link href={`/customers/${id}`} key={id}>
          <a>
            <Image
              src={
                gender === "male" ? "/images/male.jpg" : "/images/female.jpg"
              }
              alt="images"
              width={50}
              height={50}
            />
          </a>
        </Link>
      ),
    },
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
      render: (_, { id, firstName }) => (
        <Link href={`/customers/${id}`}>
          <a className="text-blue-600 font-medium hover:text-blue-600 hover:underline hover:decoration-solid">
            {formatName(firstName)}
          </a>
        </Link>
      ),
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
      render: (_, { lastName }) => <>{formatName(lastName)}</>,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "State",
      dataIndex: "state",
      key: "state",
      render: (_, { state }) => <>{state.name}</>,
    },
    {
      title: "Order Total",
      dataIndex: "orders",
      key: "orders",
      render: (_, { orders }) => (
        <>
          {orders &&
            "$" +
              formatNumber(
                orders.reduce(
                  (acc: number, item: any) => acc + item.itemCost,
                  0
                )
              )}
        </>
      ),
    },
    {
      title: "",
      dataIndex: "view-order",
      key: "view-order",
      render: (_, { id }) => (
        <Link href={`/customers/${id}/orders`}>
          <a className="text-blue-600 font-medium hover:text-blue-600 hover:underline hover:decoration-solid">
            View Orders
          </a>
        </Link>
      ),
    },
  ];
  return <Table columns={columns} dataSource={newData} />;
};
