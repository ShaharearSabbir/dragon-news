import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <img className="scale-100" src={logo} alt="" />
      <p className="text-accent">Journalism Without Fear or Favour</p>
      <p className="font-semibold">
        <span>{format(new Date(), "EEEE")}</span>
        <span className="text-accent">
          , {format(new Date(), "MMMM MM, yyyy")}
        </span>
      </p>
    </div>
  );
};

export default Header;
