import React from 'react';
import LOGO from "../../public/LOGO.svg";
import Image from "next/image";

const Copyright = () => {
  return (
    <div id="copyright" className=" w-screen h-[10rem] border-t-[1px] border-gray-200 bg-white flex justify-center items-center">
      <div className="h-full w-full flex flex-col justify-center items-center">

        <div className="w-[80px] h-[80px]">
          <Image
            src={LOGO}
            alt="logo"
            width={300}
            height={300}
          /></div>
        <h4>© Project Familiar, 2025. All Rights Reserved.</h4>
      </div>
    </div>
  );
};

export default Copyright;
