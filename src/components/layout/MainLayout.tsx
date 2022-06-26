import React, { ReactNode } from "react";

import { LayoutProps } from "@/constant/type";
import { Header } from "./components/Header";

export const MainLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
