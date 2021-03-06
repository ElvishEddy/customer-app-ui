import React from "react";
import Head from "next/head";

import { CustomerLayout } from "@/components/layout";
import { CardView } from "@/components/customers";
import { NextPageWithLayout } from "@/constant";

const CustomersPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Customers Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CardView />
      </main>
    </>
  );
};

CustomersPage.Layout = CustomerLayout;
export default CustomersPage;
