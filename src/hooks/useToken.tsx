import React, { useState, useEffect } from "react";

export const useTakeData = (key: string) => {
  const [value, setValue] = useState<string | null>();
  useEffect(() => {
    setValue(localStorage.getItem(key));
  }, [value]);
  return value;
};
