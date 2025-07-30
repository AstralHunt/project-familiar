import React from 'react';
import {PiHeadCircuitFill} from "react-icons/pi";
import { GoGraph } from "react-icons/go";
import { FaBookOpen } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
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
  }
  return (
    <>
      {(position === "left") && (
        <div className="flex flex-col md:flex-row w-full md:mt-0 mt-[2rem]">
          <div className="md:order-1 order-3 flex md:justify-end justify-center self-center w-full basis-2/5 ">
            <Image className="w-3/4 h-full object-cover" src={image} alt="caregiver" width={1280} height={856}
                   placeholder={"blur"}/>
          </div>
          <div className="md:order-3 order-1 w-full flex basis-3/5 md:w-[50vw] p-8 md:p-4">
            <div className="flex flex-col items-start justify-center text-left">
              <div className="flex flex-row justify-start items-end w-full pl-10">
                <div className="mb-2 pb-1">{icon}</div>
                <h3 className="w-full text-2xl md:text-4xl px-[1rem] md:px-[1rem] mt-2 md:mb-2 text-left">{title}</h3>
              </div>
              <h4 className=" text-sm md:text-base text-left px-10">
                {description}
              </h4>
            </div>
          </div>
        </div>
      )}
      {(position === "right") && (
        <div className="flex flex-col md:flex-row w-full">
          <div className="w-full flex basis-3/5 md:w-[50vw] p-8 md:p-4">
            <div className="flex flex-col items-start justify-center text-right">
              <div className="flex flex-row justify-end items-center w-full pr-12">
                <h3 className="w-full text-2xl md:text-4xl md:px-[5%] lg:px-[5%] mt-2 mb-4 text-right">{title}</h3>
                {icon}
              </div>
              <h4 className=" text-sm md:text-base text-right px-10">
                {description}
              </h4>
            </div>
          </div>
          <div className="flex justify-center self-center w-full basis-2/5">
            <Image className="w-3/4 h-full object-cover" src={image} alt="caregiver" width={1280} height={856}
                   placeholder={"blur"}/>
          </div>
        </div>
      )}

    </>
  );
};

export default FeatureCards;
