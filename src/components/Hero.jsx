"use client"
import React from 'react';
import Image from 'next/image';
import HERO from "../../public/hero.png";
import { IoMdDownload } from "react-icons/io";
import { FaRegCirclePlay } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="w-screen h-[70vh] pl-[10vw] pr-[10vw] md:scroll-mt-30 overflow-hidden">
        <div className="bg-white h-full w-full">
          <div className="grid grid-cols-6 h-full w-full justify-between items-center">
            <div className="flex flex-col w-full row-start-1 row-span-1 col-start-1 col-end-4 justify-center items-center h-64 z-10 gap-12">
              <div className="flex flex-col justify-center items-start gap-6">
                <h1  className="w-full">Everyone deserves a helping hand</h1>
                <h6 className="w-[75%]">Our superb team has designed a toolbox of solutions that lessens the workload on caregivers and helps dementia patients maintain familiarity with their daily lives&nbsp;
                  <a href=""><span className="text-primary font-[400]">all in one convenient tool</span></a>.</h6>
              </div>
              <div className="flex w-full justify-start basis-1/5 gap-4">
                <a href="" className="flex items-center gap-2 text-lg font-bold bg-primary pt-4 pb-4 pl-6 pr-6 drop-shadow-lg drop-shadow-gray-400 rounded-xl text-white">
                  <IoMdDownload /> View Proposal
                </a>
                <a href="" className="flex items-center gap-2 text-lg font-bold border-2 border-primary pt-4 pb-4 pl-6 pr-6 rounded-xl text-primary hover:bg-primary hover:text-white">
                  <FaRegCirclePlay /> Watch Presentation
                </a>
              </div>
            </div>
            <div className="flex row-start-1 row-span-1 col-span-5 -col-start-5 justify-center  h-full w-full">
              <Image src={HERO} alt={"hero"} className="object-cover "/>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Hero;
