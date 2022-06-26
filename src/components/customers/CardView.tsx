import { useDispatch, useSelector } from "react-redux";
import React, { useContext, useEffect, useState } from "react";
import { Pagination } from "antd";

import { customerAction, customerSelector } from "@/store";
import { fecthCustomer } from "@/store/customers";
import { CardItem } from "./components";
import { AppDispatch } from "@/store/store";
import { SearchValueContext } from "../layout/CustomerLayout";
import { CustomerType } from "@/store/customers/type";

export const CardView = () => {
  const [index, setIndex] = useState({
    min: 0,
    max: 10,
  });

  const textSearch = useContext(SearchValueContext);

  const [current, setCurrent] = useState<number>(1);
  const dispatch = useDispatch<AppDispatch>();

  const data: CustomerType[] = useSelector(customerSelector.selectData);

  useEffect(() => {
    dispatch(customerAction.fecthCustomer());
  }, []);

  const handleChange = (page: number) => {
    setCurrent(page);
    setIndex({
      min: (page - 1) * 10,
      max: page * 10,
    });
  };

  console.log(data);
  return (
    <>
      <div className="grid grid-cols-2 gap-10">
        {data &&
          data
            .filter(
              (item: any) =>
                item?.firstName
                  .toLowerCase()
                  .includes(textSearch.toLowerCase()) ||
                item?.lastName.toLowerCase().includes(textSearch.toLowerCase())
            )
            .slice(index.min, index.max)
            .map((item: any) => {
              return (
                <div key={item.id}>
                  <CardItem item={item} />
                </div>
              );
            })}
      </div>
      <div className="text-center my-10">
        <Pagination
          pageSize={10}
          current={current}
          total={data.length}
          onChange={handleChange}
        />
      </div>
    </>
  );
};
