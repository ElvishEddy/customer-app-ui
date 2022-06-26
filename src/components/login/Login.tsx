import React from "react";
import { Form } from "antd";
import * as yup from "yup";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { LockFilled } from "@ant-design/icons";

import { Button, HFInput } from "../shared";
import { useForm } from "react-hook-form";

import { loginParams } from "@/store/customers/type";
import { login } from "@/store/customers";
import { customerAction } from "@/store";
import { AppDispatch } from "@/store/store";

const schema = yup.object().shape({
  email: yup.string().required("Please fill in the blank"),
  password: yup.string().required("Please fill in the blank").min(6),
});

export const Login = () => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      email: "test@test.com",
      password: "test123",
    } as loginParams,
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const onSubmit = (value: loginParams) => {
    dispatch(customerAction.login(value));
    router.push("/");
  };

  return (
    <div className="container mx-auto">
      <div className="flex items-center gap-3 my-5 text-2xl ">
        <div className="flex items-center">
          <LockFilled style={{ fontSize: "25px" }} />
        </div>
        <h2 className="font-semibold">Login</h2>
      </div>
      <div className="max-w-[300px]">
        <Form onFinish={handleSubmit(onSubmit)}>
          <div className="my-3">
            <HFInput
              name="email"
              label="Email:"
              control={control}
              type="email"
              className=" border-l-[3px] border-l-green-600 rounded outline-none"
            />
          </div>
          <div className="my-3">
            <HFInput
              name="password"
              label="Password:"
              control={control}
              type="password"
              className="border-l-[3px] border-l-green-600 rounded outline-none"
            />
          </div>
          <Button name="Login" bgColor="bg-green-500" textColor="text-white" />
        </Form>
      </div>
    </div>
  );
};
