import React, { FC, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/store/customers";
import { useTakeData } from "@/hooks/useToken";
import { customerAction, customerSelector } from "@/store";
import { AppDispatch } from "@/store/store";
import { UserType } from "@/store/customers/type";

export const Header: FC = () => {
  const router = useRouter();

  const dispatch = useDispatch<AppDispatch>();

  const userInfo: UserType | null = useSelector(
    customerSelector.selectUserInfo
  );

  const token = useTakeData("token");

  const handleLogOut = () => {
    dispatch(logout);
    localStorage.removeItem("token");
    router.push(`/login`);
  };

  return (
    <div className="bg-blue-400">
      <div className="container mx-auto flex justify-between items-center py-2">
        <ul className="flex items-center gap-16">
          <li>
            <Link href="/customers">
              <a>
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/users.png"
                    alt="images"
                    width={40}
                    height={40}
                  />
                  <p className="text-xl text-white font-semibold">
                    Customer Manager
                  </p>
                </div>
              </a>
            </Link>
          </li>
          <li
            className={`text-lg text-white font-normal ${
              router.asPath === "/customers" ? "activeLink" : ""
            }`}
          >
            <Link href="/customers">
              <a>Customers</a>
            </Link>
          </li>
          <li
            className={`text-lg text-white font-normal ${
              router.asPath === "/settings" ? "activeLink" : ""
            }`}
          >
            <Link href={token ? `/settings` : `/login`}>
              <a>Settings</a>
            </Link>
          </li>
        </ul>

        <div
          className={`text-lg text-white font-normal ${
            router.asPath === "/login" ? "activeLink" : ""
          }`}
        >
          {!!userInfo ? (
            <p
              onClick={handleLogOut}
              className="cursor-pointer"
            >{`${userInfo?.email}(Logout)`}</p>
          ) : (
            <Link href={"/login"}>
              <a>Login</a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
