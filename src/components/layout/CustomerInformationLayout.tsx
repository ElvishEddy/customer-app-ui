import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  FormOutlined,
  TagsFilled,
  UnorderedListOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { LayoutProps } from "@/constant/type";
import { useTakeData } from "@/hooks/useToken";

export const CustomerInformationLayout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const params = router.query?.id;

  const token = useTakeData("token");
  return (
    <div className="container mx-auto ">
      <div className="flex items-center gap-2 py-5 text-2xl font-semibold">
        <div className="flex items-center">
          <UserOutlined />
        </div>
        <h3>Customer Information</h3>
      </div>

      <ul className="flex gap-10 pb-3">
        <li>
          <Link href={`/customers/${params}`}>
            <a>
              <div
                className={`flex items-center gap-2 text-[1rem] font-bold ${
                  router.asPath === `/customers/${params}`
                    ? ""
                    : "text-gray-400"
                } `}
              >
                <UnorderedListOutlined />
                <p>Customer Details</p>
              </div>
            </a>
          </Link>
        </li>
        <li>
          <Link href={`/customers/${params}/orders`}>
            <a>
              <div
                className={`flex items-center gap-2 text-[1rem] font-bold ${
                  router.asPath === `/customers/${params}/orders`
                    ? ""
                    : "text-gray-400"
                } `}
              >
                <TagsFilled />
                <p>Customer Orders</p>
              </div>
            </a>
          </Link>
        </li>
        <li>
          <Link href={!!token ? `/customers/${params}/edit` : `/login`}>
            <a>
              <div
                className={`flex items-center gap-2 text-[1rem] font-bold  ${
                  router.asPath === `/customers/${params}/edit`
                    ? ""
                    : "text-gray-400"
                }`}
              >
                <FormOutlined />
                <p> Edit Customer</p>
              </div>
            </a>
          </Link>
        </li>
      </ul>
      <main>{children}</main>
      <div>
        <Link href="/customers">
          <a className="text-blue-500 text-[1rem] font-medium ">
            View all customers
          </a>
        </Link>
      </div>
    </div>
  );
};
