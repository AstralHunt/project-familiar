"use client"
import React from 'react';
import Image from 'next/image';
import HERO from "../../public/hero.png";
import { IoMdDownload } from "react-icons/io";
import { FaRegCirclePlay } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="w-screen min-h-[60vh] px-4 md:px-[10vw] md:scroll-mt-30 overflow-hidden border-b-[1px] border-gray-200">
    <div className="bg-white h-full w-full">
      <div className="grid grid-cols-1 md:grid-cols-5 h-full w-full justify-between items-center gap-0">
        <div className="flex flex-col w-full md:row-start-1 md:row-span-1 md:col-start-1 md:col-end-3 justify-center items-center h-auto md:h-64 z-10 gap-8 md:gap-12 py-8 md:py-0">
          <div className="flex flex-col justify-center items-start gap-6">
            <h1  className="w-full">Everyone deserves a helping hand.</h1>
            <h6 className="w-[80%]">Our superb team has designed a toolbox of solutions that lessens the workload on caregivers and helps dementia patients maintain familiarity with their daily lives&nbsp;
              <a href=""><span className="text-primary font-[400]">all in one convenient web app</span></a>.</h6>
          </div>
          <div className="flex flex-col sm:flex-row w-full justify-start basis-1/5 gap-4">
          <a href="/Familiar-Proposal.pdf" download="Familiar-Proposal.pdf" className="flex items-center gap-2 text-lg font-bold bg-primary pt-4 pb-4 pl-6 pr-6 drop-shadow-lg drop-shadow-gray-400 rounded-xl text-white">
                <IoMdDownload /> View Proposal
              </a>
              <a href="https://www.youtube.com/@WMDDLangara" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg font-bold border-2 border-primary pt-4 pb-4 pl-6 pr-6 rounded-xl text-primary hover:bg-primary hover:text-white">
                <FaRegCirclePlay /> Watch Presentation
              </a>
            </div>
          </div>
        <div className="hidden md:flex md:row-start-1 md:row-span-1 md:col-span-5 md:-col-start-5 justify-end h-full w-full order-first md:order-last">
          <Image src={HERO} alt={"hero"} className="object-cover "/>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Hero;
