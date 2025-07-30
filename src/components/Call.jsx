import React from 'react';
import Image from "next/image";
import LOGO from "../../public/LOGO.svg";
import TITLE from "../../public/TITLE.svg";
import TITLEWHITE from "../../public/TITLE-WHITE.svg";
import LANGARA from "../../public/LANGARA.png";
import {IoMdDownload} from "react-icons/io";
import {FaRegCirclePlay} from "react-icons/fa6";
import { IoMdExit } from "react-icons/io";
import { ImArrowUpRight2 } from "react-icons/im";


const Call = () => {
  return (
    <>
      <div
        className="flex flex-col items-start justify-start w-full text-white bg-primary px-4 py-8 md:px-[10vw] md:py-[5rem] md:flex-row">
        <div
          className="flex flex-col basis-full md:basis-1/3 pr-0 md:pr-10 justify-start items-start w-full h-full mb-8 md:mb-0">
        <div className="flex flex-col items-start justify-start w-full h-full">
          <div className="flex items-center w-[150px] md:w-[200px] h-16 md:h-20 mb-6 md:mb-8">
          <Image
                src={TITLEWHITE}
                alt="logo"
                width={300}
                height={300}
              />
            </div>
            <h6 className="mb-4">A web platform built for nursing home staff, care facility caregivers, family members, and the dementia patients they serve.</h6>
            <a href="https://familiar-project.vercel.app/landing"
               className="flex items-center gap-2 text-lg font-bold bg-white  pt-3 pb-3 pl-5 pr-5 rounded-xl text-primary">
              Launch App <IoMdExit />
            </a>
          </div>
          <div className="flex mt-12">
            <div className="flex items-center w-[260px]">
              <Image
                src={LANGARA}
                alt="logo"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col basis-full md:basis-1/3 justify-start items-start w-full h-full mb-8 md:mb-0">
        <div className="h-20 flex items-center mb-8">
            <h3 className="!font-bold">Explore</h3>
          </div>
          <div className="flex flex-col text-left gap-4 w-full">
            <a href="#story" className="opacity-90 hover:underline font-bold flex flex-row items-center gap-4">

                <ImArrowUpRight2/>
                <h6> Dementia</h6>
            </a>
            <a href="#elderly" className="opacity-90 hover:underline font-bold flex flex-row items-center gap-4">

                <ImArrowUpRight2/>
                <h6> Elderly</h6>
            </a>
            <a href="#caregiver" className="opacity-90 hover:underline font-bold flex flex-row items-center gap-4">

                <ImArrowUpRight2/>
                <h6> Caregiver</h6>
            </a>
            <a href="#team" className="opacity-90 hover:underline font-bold flex flex-row items-center gap-4">

                <ImArrowUpRight2/>
                <h6> Team</h6>
            </a>
          </div>
        </div>
        <div className="flex basis-full md:basis-1/3 flex-col items-start justify-start w-full h-full">
        <div className="h-20 flex items-center mb-8">
            <h3 className="!font-bold">Have some questions?</h3>
          </div>
          <form className="w-full max-w-full md:max-w-lg space-y-3 md:space-y-4">
          <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
            ></textarea>
            <button
              type="submit"
              className="bg-primary text-white border-white border-[1px] px-6 py-2 rounded-md hover:bg-primary/90 w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Call;
