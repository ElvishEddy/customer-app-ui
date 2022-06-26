import React from "react";
import { GetServerSideProps } from "next";

import { CustomerInformationLayout } from "@/components/layout";
import { getUserById } from "@/store/customers/api";
import { formatName, formatNumber } from "@/utils";

const CustomerOrdersPage = ({ data }: any) => {
  const { orders, firstName, lastName } = data;
  return (
    <div className="my-10 max-w-[450px]">
      <h3 className="text-lg font-medium">
        Orders for {formatName(firstName) + " " + formatName(lastName)}
      </h3>
      <div className="mt-4 font-medium border-b-[1px] border-black">
        {orders &&
          orders.length > 0 &&
          orders.map((order: any, index: number) => {
            const { productName, itemCost } = order;
            return (
              <div
                key={`order-${index}`}
                className="flex justify-between text-[1rem]"
              >
                <p>{productName}</p>
                <p>${itemCost}</p>
              </div>
            );
          })}
      </div>
      <div className="flex justify-between text-[1rem]">
        <div></div>
        <p className="font-medium">
          {orders &&
            orders.length > 0 &&
            "$" +
              formatNumber(
                orders.reduce((acc: number, order: any) => {
                  return acc + order.itemCost;
                }, 0)
              )}
        </p>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await getUserById(params?.id);

  return {
    props: {
      data: res.data,
    },
  };
};
CustomerOrdersPage.Layout = CustomerInformationLayout;
export default CustomerOrdersPage;
