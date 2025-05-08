import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="bg-base-200">
      <div className="fixed w-full top-o">
        <header className="w-11/12 mx-auto py-4">
          <Navbar></Navbar>
        </header>
      </div>

      <main className="w-11/12 mx-auto">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AuthLayout;
