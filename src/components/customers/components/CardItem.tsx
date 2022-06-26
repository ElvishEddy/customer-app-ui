import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FormOutlined } from "@ant-design/icons";

import { formatName } from "@/utils/string";
import { useTakeData } from "@/hooks/useToken";

export const CardItem = ({ item }: any) => {
  const { id, firstName, lastName, gender, city, state } = item;

  const token = useTakeData("token");

  return (
    <div className="border max-w-[300px] mx-auto">
      <div className="flex justify-between bg-blue-400 p-1 items-center cursor-pointer">
        <Link href={`/customers/${id}`}>
          <p className="text-[1.25rem] text-white font-bold">{`${formatName(
            firstName
          )} ${formatName(lastName)}`}</p>
        </Link>
        <Link href={!!token ? `/customers/${id}/edit` : `/login`}>
          <FormOutlined className="text-white text-[1.125rem] cursor-pointer" />
        </Link>
      </div>
      <div className="flex gap-8 p-2 mb-5">
        <div className="cursor-pointer">
          <Link href={`/customers/${id}`}>
            <Image
              src={
                gender === "male" ? "/images/male.jpg" : "/images/female.jpg"
              }
              alt="img"
              width={50}
              height={50}
            />
          </Link>
        </div>
        <div className="font-medium">
          <p>{city},</p>
          <p>{state.name}</p>
          <Link href={`/customers/${id}/orders`}>
            <a className="text-blue-500">View Orders</a>
          </Link>
        </div>
      </div>
    </div>
  );
};
