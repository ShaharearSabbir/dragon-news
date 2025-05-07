import React from "react";
import { FaFacebook, FaInstagram, FaTwitch, FaTwitter } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Find Us on</h2>
      <div className="join join-vertical w-full">
        <button className="btn bg-base-100 justify-start join-item pl-10">
          {" "}
          <FaFacebook /> Facebook
        </button>
        <button className="btn bg-base-100 justify-start join-item pl-10">
          <FaTwitter /> Twitter
        </button>
        <button className="btn bg-base-100 justify-start join-item pl-10">
          <FaInstagram /> Instagram
        </button>
      </div>
    </div>
  );
};

export default SocialIcons;
