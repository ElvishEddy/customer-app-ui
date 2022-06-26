import React from "react";
import Head from "next/head";

import { Login } from "@/components/login";

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>Login Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Login />
      </main>
    </>
  );
};

export default LoginPage;
