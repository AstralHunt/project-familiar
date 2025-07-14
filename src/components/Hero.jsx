"use client"
import React from 'react';
import Image from 'next/image';
import HERO from "../../public/hero.png";

const Hero = () => {
  return (
    <div className="w-screen h-[70vh] pl-[10vw] pr-[10vw] md:scroll-mt-30">
        <div className="bg-white h-full w-full">
          <div className="flex h-full w-full justify-between items-center">
            <div className="flex flex-col basis-1/3 justify-center items-center h-64 w-96 z-10 gap-12">
              <div className="flex flex-col justify-center items-start">
                <h1  className="w-full mb-4">Everyone deserves a helping hand</h1>
                <p className="w-[80%]">Our team has devised a tool with a sole purpose of helping delay the</p>
              </div>
              <div className="flex justify-end basis-1/5 ">
                <a href="" className="text-xl font-bold bg-[#176F9C] pt-2 pb-2 pl-4 pr-4 rounded-xl text-white">View Proposal</a>
              </div>
            </div>
            <div className="flex basis-2/3 justify-center align-bottom h-full w-full">
              <Image src={HERO} alt={"hero"} className="object-cover"/>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Hero;
