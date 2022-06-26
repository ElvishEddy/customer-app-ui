import { Button, HFInput } from "@/components/shared";
import { Form } from "antd";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";

import { addNewCustomer, editCustomer } from "@/store/customers";
import { customerAction } from "@/store";
import { AppDispatch } from "@/store/store";
import { CustomerType } from "@/store/customers/type";

interface NewCustomerProps {
  type?: string;
  data?: any;
}

export interface NewCustomerParams {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
}

const schema = yup.object().shape({
  firstName: yup.string().required("Please fill in the blank"),
  lastName: yup.string().required("Please fill in the blank"),
  address: yup.string().required("Please fill in the blank"),
  city: yup.string().required("Please fill in the blank"),
  state: yup.string().required("Please fill in the blank"),
});

export const NewCustomer = ({ type, data }: NewCustomerProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const { id, firstName, lastName, address, city, state } = data;

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      firstName: firstName ?? "",
      lastName: lastName ?? "",
      address: address ?? "",
      city: city ?? "",
      state: state?.name ?? "",
    } as NewCustomerParams,
    resolver: yupResolver(schema),
  });

  const onSubmit1 = (value: NewCustomerParams) => {
    dispatch(customerAction.addNewCustomer(value));
  };

  const onSubmit2 = (value: NewCustomerParams) => {
    dispatch(customerAction.editCustomer(id, value));
  };

  const handleDelete = () => {
    dispatch(customerAction.deleteCustomer(id));
  };

  return (
    <>
      <Form>
        <div className="w-1/3 mb-[50px]">
          <div className="my-3">
            <HFInput
              name="firstName"
              label="First Name"
              control={control}
              type="text"
              className="rounded outline-none border-l-[3px] border-l-green-600"
            />
          </div>
          <div className="my-3">
            <HFInput
              name="lastName"
              label="Last Name"
              control={control}
              type="text"
              className="rounded outline-none border-l-[3px] border-l-green-600"
            />
          </div>
          <div className="my-3">
            <HFInput
              name="address"
              label="Address"
              control={control}
              type="text"
              className=" rounded outline-none border-l-[3px] border-l-green-600"
            />
          </div>
          <div className="my-3">
            <HFInput
              name="city"
              label="City"
              control={control}
              type="text"
              className="rounded outline-none border-l-[3px] border-l-green-600"
            />
          </div>
          <div className="my-3">
            <HFInput
              name="state"
              label="State"
              control={control}
              type="text"
              className="rounded outline-none border-l-[3px] border-l-green-600"
            />
          </div>

          <div className="flex justify-between items-center">
            <div>
              {type === "edit" && (
                <Button
                  name="Delete"
                  bgColor="bg-red-500"
                  textColor="text-white"
                  handleClick={handleDelete}
                />
              )}
            </div>
            <div className="flex gap-2">
              <Button
                name="Cancel"
                border="border"
                textColor="text-black"
                handleClick={() => reset()}
              />
              <Button
                name={type === "edit" ? "Update" : "Insert"}
                bgColor="bg-green-500"
                textColor="text-white"
                handleClick={
                  type === "edit"
                    ? handleSubmit(onSubmit2)
                    : handleSubmit(onSubmit1)
                }
              />
            </div>
          </div>
        </div>
      </Form>
    </>
  );
};
