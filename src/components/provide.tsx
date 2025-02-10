"use client";
import { DataProvider } from "../contexts/account";

export default function Providers({ children, serviceComponents }) {
  return <DataProvider value={serviceComponents}>{children}</DataProvider>;
}
