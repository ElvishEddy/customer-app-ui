import React from "react";
import Head from "next/head";

import { Settings } from "@/components/settings";

const SettingPage = () => {
  return (
    <>
      <Head>
        <title>Setting Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Settings />
      </main>
    </>
  );
};

export default SettingPage;
