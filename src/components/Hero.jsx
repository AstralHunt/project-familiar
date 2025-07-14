"use client"
import React from 'react';
import Image from 'next/image';
import HERO from "../../public/hero.png";
import { IoMdDownload } from "react-icons/io";
import { FaRegCirclePlay } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="w-screen h-[70vh] pl-[10vw] pr-[10vw] md:scroll-mt-30">
        <div className="bg-white h-full w-full">
          <div className="flex h-full w-full justify-between items-center">
            <div className="flex flex-col basis-1/3 justify-center items-center h-64 w-96 z-10 gap-12">
              <div className="flex flex-col justify-center items-start gap-6">
                <h1  className="w-full mb-4">Everyone deserves a helping hand</h1>
                <h6 className="w-[85%]">Our team has devised a tool with a sole purpose of assisting dementia patients and caregivers</h6>
              </div>
              <div className="flex w-full justify-center basis-1/5 gap-4">
                <a href="" className="flex items-center gap-2 text-lg font-bold bg-primary pt-3 pb-3 pl-5 pr-5 drop-shadow-lg drop-shadow-gray-400 rounded-xl text-white">
                  <IoMdDownload /> View Proposal
                </a>
                <a href="" className="flex items-center gap-2 text-lg font-bold border-2 border-primary pt-3 pb-3 pl-5 pr-5 rounded-xl text-primary hover:bg-primary hover:text-white">
                  <FaRegCirclePlay /> Watch Presentation
                </a>
              </div>
            </div>
            <div className="flex basis-2/3 justify-center align-bottom h-full w-full">
              <Image src={HERO} alt={"hero"} className="object-cover "/>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Hero;
