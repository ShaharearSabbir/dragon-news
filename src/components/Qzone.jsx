import React from "react";
import Swimming from "../assets/swimming.png";
import Class from "../assets/class.png"
import Play from "../assets/playground.png"
const Qzone = () => {
  return (
    <div className="bg-base-200 p-5">
      <h2 className="font-bold mb-5">Qsone</h2>
      <div className="w-full flex flex-col justify-center items-center gap-5 ">
        <img src={Swimming} alt="" />
        <img src={Class} alt="" />
        <img src={Play} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
