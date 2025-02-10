"use client";
import { createContext, useContext } from "react";

const DataContext = createContext<any>(null);

export const useDataContext = () => useContext(DataContext);

export const DataProvider = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: any;
}) => <DataContext.Provider value={value}>{children}</DataContext.Provider>;
