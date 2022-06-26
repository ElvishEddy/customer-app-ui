import React from "react";
import { Controller } from "react-hook-form";
import { Input } from "antd";

interface HFInputProps {
  label?: string;
  required?: boolean;
  control: any;
  name: string;
  className?: string;
  placeholder?: string;
  labelClassName?: string;
  type?: string;
  value?: string;
}
export const HFInput = ({
  label,
  value,
  required,
  control,
  name,
  className,
  placeholder,
  labelClassName,
  type,
}: HFInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <>
          {label && <label>{label}</label>}
          <Input
            type={type}
            onChange={onChange}
            value={value}
            onBlur={onBlur}
            className={className}
            placeholder={placeholder}
          />
          {error && <small className="text-red-500">{error?.message}</small>}
        </>
      )}
    />
  );
};
