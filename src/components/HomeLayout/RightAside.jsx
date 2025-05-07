import React from "react";
import SocialLogin from "./SocialLogin";
import SocialIcons from "../SocialIcons";
import Qzone from "../Qzone";

const RightAside = () => {
  return (
    <div className="space-y-5">
      <SocialLogin />
      <SocialIcons />
      <Qzone />
    </div>
  );
};

export default RightAside;
