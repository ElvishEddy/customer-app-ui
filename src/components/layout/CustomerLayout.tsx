import React, { useState } from "react";

import { LayoutProps } from "@/constant/type";
import { Subnav } from "./components/Subnav";

export const SearchValueContext = React.createContext("");
export const CustomerLayout = ({ children }: LayoutProps) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearchName = (name: string) => {
    setSearchValue(name);
  };

  return (
    <div className="container mx-auto">
      <Subnav handleSearchName={handleSearchName} searchValue={searchValue} />
      <SearchValueContext.Provider value={searchValue}>
        {children}
      </SearchValueContext.Provider>
    </div>
  );
};
