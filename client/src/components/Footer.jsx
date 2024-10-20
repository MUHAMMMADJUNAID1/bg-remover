import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="flex items-center justify-between gap-4 px-4 mt-10 lg:px-44 py-3">
      <img width={150} src={assets.logo} alt="Img logo" />
      <p className="flex-1  border-1 border-gray-400 pl-4 text-gray-500 text-sm max-sm:hidden">
        Copyright @Junaid.dev | All right reserved.
      </p>
      <div className="flex gap-1">
        <img
          width={40}
          className="cursor-pointer"
          src={assets.facebook_icon}
          alt="Facebook Icon"
        />
        <img
          width={40}
          className="cursor-pointer"
          src={assets.google_plus_icon}
          alt="Google plus icon"
        />
        <img
          width={40}
          className="cursor-pointer"
          src={assets.twitter_icon}
          alt="twitter icon"
        />
      </div>
    </div>
  );
};

export default Footer;
