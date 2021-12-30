import React from "react";
import Header from "../Header";
import { LayoutProps } from "./types";

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="overflow-hidden">
      <Header />
      <main>{children}</main>
    </div>
  );
};
