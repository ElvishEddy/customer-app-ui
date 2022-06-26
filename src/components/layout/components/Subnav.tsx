import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { MenuOutlined, PlusOutlined, WindowsOutlined } from "@ant-design/icons";
import { getToken } from "@/utils/shared";
import { useTakeData } from "@/hooks/useToken";

interface Props {
  handleSearchName: (name: string) => void;
  searchValue: string;
}

export const Subnav = ({ handleSearchName, searchValue }: Props) => {
  const router = useRouter();

  const handleChange = (e: any) => {
    let value = e.target.value;
    handleSearchName(value);
  };

  const token = useTakeData("token");

  return (
    <div className="flex justify-between py-8">
      <ul className="flex gap-20">
        <li>
          <Link href="/customers">
            <a
              className={`flex items-center gap-2 text-[1rem] ${
                router.asPath === "/customers" ? "font-black" : ""
              }`}
            >
              <WindowsOutlined />
              Card View
            </a>
          </Link>
        </li>
        <li>
          <Link href="/customers/list">
            <a
              className={`flex items-center gap-2 text-[1rem] ${
                router.asPath === "/customers/list" ? "font-black" : ""
              }`}
            >
              <MenuOutlined />
              List View
            </a>
          </Link>
        </li>
        <li>
          <Link href={!!token ? `/customers/new-customer` : "/login"}>
            <a
              className={`flex items-center gap-2 text-[1rem] ${
                router.asPath === "/customers/new-customer" ? "font-black" : ""
              }`}
            >
              <PlusOutlined />
              New Customer
            </a>
          </Link>
        </li>
      </ul>

      <div>
        <p className="text-[1rem]">Filter:</p>

        <input
          type="text"
          name="searchName"
          id="searchName"
          onChange={handleChange}
          className="border px-2 py-1 outline-none w-[200px] rounded border-gray-400"
        />
      </div>
    </div>
  );
};
