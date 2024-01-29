"use client";
import React, { useEffect } from "react";

const Footer = () => {
  return (
    <div
      className="border-t bg-white "
      style={{ position: "fixed", bottom: "0", width: "100%" }}
    >
      <div className="py-8 mx-auto">
        <p className=" text-center text-sm font-bold text-black leading-none">
          &copy; 2024 Fabrify, All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
