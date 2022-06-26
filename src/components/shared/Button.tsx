import React from "react";

interface ButtonProps {
  name: string;
  bgColor?: string;
  textColor?: string;
  border?: string;
  handleClick?: () => void;
}
export const Button = ({
  name,
  bgColor,
  textColor,
  border,
  handleClick,
}: ButtonProps) => {
  return (
    <>
      <button
        onClick={handleClick}
        className={`rounded px-4 py-1 ${bgColor} ${textColor} ${border}`}
      >
        {name}
      </button>
    </>
  );
};
