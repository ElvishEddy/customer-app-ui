import React from "react";
import { Controller } from "react-hook-form";
import { Select } from "antd";

interface HFDropdownInputProps {
  label?: string;
  required?: boolean;
  control: any;
  name: string;
  data: any[];
  placeholder?: string;
  labelClassName?: string;
  className?: string;
}
const { Option } = Select;
export const HFDropdownInput = ({
  label,
  control,
  name,
  data,
  placeholder,
  className,
}: HFDropdownInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <div className="flex flex-col">
          {label && <label>{label}</label>}

          <div className={className}>
            <Select
              placeholder={placeholder}
              clearIcon={false}
              value={value}
              onChange={onChange}
              bordered={false}
              className="w-full"
            >
              {data.map((item, index) => {
                return (
                  <Option key={index} value={item}>
                    {item}
                  </Option>
                );
              })}
            </Select>
          </div>

          {error && <small className="text-red-500">{error?.message}</small>}
        </div>
      )}
    />
  );
};
