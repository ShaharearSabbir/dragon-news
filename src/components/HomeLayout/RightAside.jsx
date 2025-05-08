import React, { use } from "react";
import SocialLogin from "./SocialLogin";
import SocialIcons from "../SocialIcons";
import Qzone from "../Qzone";
import { AuthContext } from "../../Provider/AuthProvider";

const RightAside = () => {
  const { user } = use(AuthContext);

  return (
    <div className="space-y-5">
      {!user && <SocialLogin />}
      <SocialIcons />
      <Qzone />
    </div>
  );
};

export default RightAside;
