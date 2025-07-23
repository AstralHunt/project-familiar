import React from 'react';
import {PiHeadCircuitFill} from "react-icons/pi";
import { GoGraph } from "react-icons/go";
import { FaBookOpen } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { ImProfile } from "react-icons/im";
import Image from "next/image";
import SCHEDULE from "../../public/Schedule.png";


const FeatureCards = ({icon, image, title, description, position}) => {
  if (icon === "head") {
    icon = <PiHeadCircuitFill className="h-12 w-12 text-primary"/>
  } else if (icon === "graph") {
    icon = <GoGraph className="h-12 w-12 text-primary"/>
  } else if (icon === "book") {
    icon = <FaBookOpen className="h-12 w-12 text-primary"/>
  } else if (icon === "game") {
    icon = <FaGamepad className="h-12 w-12 text-primary"/>
  } else if (icon === "schedule") {
    icon = <FaCalendarAlt className="h-12 w-12 text-primary"/>
  } else if (icon === "people") {
    icon = <FaPeopleGroup className="h-12 w-12 text-primary"/>
  } else if (icon === "profile") {
    icon = <ImProfile className="h-12 w-12 text-primary"/>
  }
  return (
    <>
      {(position === "left") && (
        <div className="flex flex-col md:flex-row w-full md:mt-0 mt-[2rem] drop-shadow-2xl rounded-2xl">
          <div className="md:order-1 order-3 flex md:justify-end justify-center self-center hover:scale-150 duration-900 transtion-transform w-full overflow-hidden basis-2/5 ">
            <Image className="w-3/4 h-full object-cover rounded-2xl" src={image} alt="caregiver" width={1280} height={856}
                   placeholder={"blur"}/>
          </div>
          <div className="md:order-3 order-1 w-full flex basis-3/5 md:w-[50vw] p-8 md:p-4">
            <div className="flex flex-col items-start justify-center text-left">
              <div className="flex flex-row justify-start items-end w-full pl-10">
                <div className="mb-2">{icon}</div>
                <h4 className="w-full text-2xl md:text-4xl px-[1rem] md:px-[1rem] mt-2 md:mb-2 text-left">{title}</h4>
              </div>
              <h5 className=" text-sm md:text-base text-left px-10">
                {description}
              </h5>
            </div>
          </div>
        </div>
      )}
      {(position === "right") && (
        <div className="flex flex-col md:flex-row w-full">
          <div className="w-full flex basis-3/5 md:w-[50vw] p-8 md:p-4">
            <div className="flex flex-col items-start justify-center text-right">
              <div className="flex flex-row justify-end items-center w-full pr-12">
                <h4 className="w-full text-2xl md:text-4xl md:px-[5%] lg:px-[5%] mt-2 mb-4 text-right">{title}</h4>
                {icon}
              </div>
              <h5 className=" text-sm md:text-base text-right px-10">
                {description}
              </h5>
            </div>
          </div>
          <div className="flex justify-center self-center w-full basis-2/5">
            <Image className="w-3/4 h-full object-cover" src={image} alt="caregiver" width={1280} height={856}
                   placeholder={"blur"}/>
          </div>
        </div>
      )}
      {(position === "down") && (
        <div className="w-[400px] h-[300px] flex flex-col items-center md:flex-row md:mt-0 mt-[2rem] border-gray-100 border-[1px] rounded-2xl ">
            <div className="flex flex-col items-start justify-center text-center">
                {/*<div className="mb-2">{icon}</div>*/}
                <div className="flex justify-center self-center w-[90px] h-auto"><Image className="w-3/4 h-full object-cover" src={image} alt="caregiver"></Image></div>
                <h4 className="w-full text-2xl md:text-4xl px-[1rem] md:px-[1rem] mt-2 md:mb-2 text-center">{title}</h4>
              <h6 className=" text-sm md:text-base text-center px-10">
                {description}
              </h6>
            </div>
        </div>
      )}
      {(position === "none") && (
        <div className="flex basis-1/3 flex-col md:mt-0 mt-[2rem] drop-shadow-2xl rounded-2xl mb-20">
          <div className="w-full flex p-8 md:p-0">
            <div className="flex flex-col items-start justify-center text-left">
              <div className="flex flex-row justify-center mb-5 w-[25%]">{icon}</div>
              <div className="flex flex-row justify-start items-end w-full">
                <h4 className="w-full text-2xl md:text-4xl mt-2 md:mb-4 text-left">{title}</h4>
              </div>
              <h5 className=" text-sm md:text-base text-left">
                {description}
              </h5>
            </div>
          </div>
        </div>
      )}

    </>
  );
};

export default FeatureCards;
