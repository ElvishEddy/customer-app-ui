import React from "react";
import { Form } from "antd";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { SettingFilled } from "@ant-design/icons";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Button, HFInput } from "../shared";
import { updateUserInfo } from "@/store/customers";
import { AppDispatch } from "@/store/store";
import { customerAction } from "@/store";

export interface SettingsProps {
  currentEmail: string;
  newEmail: string;
  password: string;
  numberPerpage: number;
}
const schema = yup.object().shape({
  currentEmail: yup.string().required("Please fill in the blank"),
  newEmail: yup.string().required("Please fill in the blank"),
  password: yup.string().required("Please fill in the blank").min(6),
  numberPerpage: yup.number().required("Please fill in the blank"),
});

export const Settings = () => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      currentEmail: "test@test.com",
      newEmail: "test123@test.com",
      password: "test123",
      numberPerpage: 0,
    } as SettingsProps,
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = (value: SettingsProps) => {
    dispatch(customerAction.updateUserInfo(value));
    reset();
  };

  return (
    <div className="container mx-auto">
      <div className="flex items-center gap-3 my-5 text-2xl ">
        <div className="flex items-center">
          <SettingFilled style={{ fontSize: "25px" }} />
        </div>
        <h2 className="font-semibold">Settings</h2>
      </div>
      <div className="max-w-[300px]">
        <Form>
          <div className="my-3">
            <HFInput
              name="currentEmail"
              label="Current Email"
              control={control}
              type="email"
              className="rounded outline-none"
            />
          </div>
          <div className="my-3">
            <HFInput
              name="newEmail"
              label="New Email"
              control={control}
              type="email"
              className="rounded outline-none"
            />
          </div>
          <div className="my-3">
            <HFInput
              name="password"
              label="Confirm Password"
              control={control}
              type="password"
              className=" rounded outline-none"
            />
          </div>
          <div className="my-3">
            <HFInput
              name="numberPerpage"
              label="Number of page"
              control={control}
              type="number"
              className="rounded outline-none"
            />
          </div>
          <div className="flex gap-3">
            <Button
              name="Save"
              bgColor="bg-green-500"
              textColor="text-white"
              handleClick={handleSubmit(onSubmit)}
            />
            <Button name="Cancel" border="border" textColor="text-black" />
          </div>
        </Form>
      </div>
    </div>
  );
};
