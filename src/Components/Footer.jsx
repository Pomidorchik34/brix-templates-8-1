import React from "react";
import logo from "../images/logo.svg";

function Footer() {
  return (
    <div className="footer px-[98px] flex items-center justify-between h-[195.79px]">
      <div>
        <img src={logo} width={262.85} height={34.77} alt="" />
        <p className="text-[#6F6C90] mt-[17px]">
          Copyright © 2024 BRIX Templates | All Rights Reserved
        </p>
      </div>
      <label className="w-[507.49px] h-[73.51px] shadow-lg rounded-[60px] flex">
        <input
          placeholder="Enter your email"
          type="text"
          className="w-[367.49px] h-[33.51px] outline-none rounded-[60px] px-10 relative top-[20px] bg-transparent"
        />
        <button className="btn-def bg-def-blue h-[39px] relative top-[5px] right-[10px]">
          Subscribe
        </button>
      </label>
    </div>
  );
}

export default Footer;
