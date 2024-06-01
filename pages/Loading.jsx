"use client";
import React from "react";
import Logo from "@/public/logo.png";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="w-screen h-screen absolute bg-white dark:bg-black z-50 ">
      <div className="flex justify-center w-full h-full items-center">
        <div className="w-24 h-24 animate-pulse">
          <Image src={Logo} className="w-24 h-24" alt="hehe.png" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
