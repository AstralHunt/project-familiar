import React from 'react';
import {PiHeadCircuitFill} from "react-icons/pi";
import { GoGraph } from "react-icons/go";
import Image from "next/image";
import SCHEDULE from "../../public/Schedule.png";



const FeatureCards = ({icon, image, title, description, position}) => {
  if (icon === "head") {
    icon = <PiHeadCircuitFill className="h-12 w-12 text-primary"/>
  } else if (icon === "graph") {
    icon = <GoGraph className="h-12 w-12 text-primary"/>
  }
  return (
    <>
      {(position === "left") && (
        <div className="flex flex-col md:flex-row w-full">
          <div className="flex justify-center self-center w-full basis-2/5 md:w-[50%] h-[300px] md:h-[10%]">
            <Image className="w-4/4 h-full object-cover" src={image} alt="caregiver" width={1280} height={856}
                   placeholder={"blur"}/>
          </div>
          <div className="w-full flex basis-3/5 md:w-[50vw] p-8 md:p-4">
            <div className="flex flex-col items-center justify-center text-center">
              {icon}
              <h3 className=" text-2xl md:text-4xl md:px-[5%] lg:px-[10%] mt-2 mb-4">{title}</h3>
              <h4 className=" text-sm md:text-base text-center px-10">
                {description}
              </h4>
            </div>
          </div>
        </div>
      )}
      {(position === "right") && (
        <div className="flex flex-col md:flex-row w-full">
          <div className="w-full flex basis-3/5 md:w-[50vw] p-8 md:p-4">
            <div className="flex flex-col items-center justify-center text-center">
              {icon}
              <h3 className=" text-2xl md:text-4xl md:px-[5%] lg:px-[10%] mt-2 mb-4">{title}</h3>
              <h4 className=" text-sm md:text-base text-center px-10">
                {description}
              </h4>
            </div>
          </div>
          <div className="flex justify-center self-center w-full basis-2/5 md:w-[50%] h-[300px] md:h-[10%]">
            <Image className="w-3/4 h-full object-cover" src={SCHEDULE} alt="caregiver" width={1280} height={856}
                   placeholder={"blur"}/>
          </div>
        </div>
      )}

    </>
  );
};

export default FeatureCards;
