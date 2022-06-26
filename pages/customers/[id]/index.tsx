import React from "react";
import Image from "next/image";

import { GetServerSideProps } from "next";
import { CustomerInformationLayout } from "@/components/layout";
import { getUserById } from "@/store/customers/api";
import { formatName } from "@/utils";

const CustomerInformationPage = ({ data }: any) => {
  const { firstName, lastName, address, gender, city, state } = data;
  return (
    <div className="my-10">
      <Image
        src={gender === "male" ? "/images/male.jpg" : "/images/female.jpg"}
        alt="images"
        width={100}
        height={100}
      />
      <h3 className="text-lg font-medium">{`${formatName(
        firstName
      )} ${formatName(lastName)}`}</h3>
      <div className="mt-4 font-medium">
        <p>{address}</p>
        <p>
          {city}, {state.name}
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
CustomerInformationPage.Layout = CustomerInformationLayout;
export default CustomerInformationPage;
