"use client"
import React from 'react';
import Image from "next/image";
import ELDERLY from "../../public/Elderly.jpeg";
import { PiHeadCircuitFill } from "react-icons/pi";
import FeatureCards from "@/components/FeatureCards";
import DASHBOARD2 from "../../public/Dashboard2.png";
import SCHEDULE from "../../public/Schedule.png";
import RELATIONSHIP from "../../public/Relationship.png";
import DIARY from "../../public/Diary.png";
import WRITING from "../../public/writing.png";

const Elderly = () => {
  return (
    <div id="elderly" className="flex flex-col pb-10 md:gap-12 md:pb-30 w-screen min-h-[30rem] mb-5 md:px-[10vw] md:scroll-mt-30">
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full basis-1/2 md:w-[50vw] bg-primary p-8 md:p-12">
          <div className="h-full flex flex-col items-center justify-between text-center pt-[5%]">
            <div>
              <h2 className="text-white text-2xl md:text-4xl mb-4">For the Elderly</h2>
              <h6
                className="text-white/90 text-sm md:text-base md:mx-[10%] lg:mx-[15%] ">
                From diaries to cognitive games, Familiar considers the patient's needs to remember the ones that love
                them the most, their family members.
                <br/>
                <br/>
                Designed to be easily navigable by older users, The Patient Portal offers larger buttons and no delete functionality, ensuring the patient's memories are always safe.
                <br/>
              </h6>
            </div>
            {/*<div className="justify-self-end self-end"><h5 className="text-white italic">...see more below</h5></div>*/}
          </div>
        </div>
        <div className="w-full basis-1/2 md:w-[50vw] h-[300px] md:h-auto">
        <Image className="w-full h-full object-cover" src={ELDERLY} alt="caregiver" width={1280} height={856}
                 placeholder={"blur"}/>
        </div>
      </div>
      {/*border-b-white border-b-[1px] pb-[10px]*/}
      {/*CARDS*/}
      {/*<div className="flex items-center">*/}

      {/*  <div className="max-w-lg rounded-xl bg-white shadow-3xl hover:border  transition-shadow duration-300 overflow-hidden">*/}
      {/*    <div className="p-6">*/}
      {/*      <div>*/}
      {/*        <PiHeadCircuitFill className="h-10 w-10"/>*/}
      {/*        <h3 className="text-xl font-semibold text-gray-800 mb-2">Cognitive Game</h3>*/}
      {/*      </div>*/}
      {/*      <h5 className="">*/}
      {/*        This is a simple card with some sample content. You can customize it further based on your needs.*/}
      {/*      </h5>*/}
      {/*    </div>*/}
      {/*  </div>*/}

      {/*</div>*/}

      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-14 justify-around items-center md:px-0">

        <FeatureCards icon={"people"} image={WRITING} title={"Relationships Library"} description={"Patients have access to a full gallery of all their relations and many photos of them."} position={"none"}></FeatureCards>

        <FeatureCards icon={"book"} image={WRITING} title={"Patient Diary"} description={"The diary system provides the patient an easy way to journal and record their thoughts."} position={"none"}></FeatureCards>

        <FeatureCards icon={"game"} image={WRITING} title={"Cognitive Games"} description={"Patients can easily practice their cognition with a memory-based game and sharpen memory."} position={"none"}></FeatureCards>

        {/*<FeatureCards icon={"people"} image={WRITING} title={"Relationships Gallery"} description={"Family members and care workers are provided with an arsenal of tools to monitor and help "} position={"none"}></FeatureCards>*/}

      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-20 justify-start items-center md:px-0">
        <FeatureCards icon={"schedule"} image={WRITING} title={"Synced Schedule"} description={"Patients can easily view a list of their routines provided by their caregivers."} position={"none"}></FeatureCards>

        <FeatureCards icon={"profile"} image={WRITING} title={"Patient Profile"} description={"Patient information is stored securely and could be viewed anytime by the patient."} position={"none"}></FeatureCards>
      </div>

    </div>
  );
};

export default Elderly;
// <div id="elderly" className="w-screen min-h-[30rem] md:h-[50rem] px-[10vw] md:scroll-mt-30">
//   <div className="container grid grid-cols-6 grid-rows-1 w-full h-[500px]">
//     <div className="row-start-1 row-span-1 col-start-1 col-end-4 bg-gradient-to-r from-primary via-primary/85 via-80% to-primary/80 p-8 md:p-12 z-40">
//       <div className="flex flex-col items-center justify-center text-center pt-[10%]">
//         <h2 className="text-white text-2xl md:text-4xl mb-4">Elderly</h2>
//         <h6 className="text-white/90 text-sm md:text-base md:px-[10%] lg:px-[20%]">
//           From diaries to cognitive games, Familiar considers the patient's needs to remember the ones that love them the most, their family members
//         </h6>
//       </div>
//     </div>
//     <div className="row-start-1 row-span-1 -col-start-1 col-end-3 h-[300px] md:h-auto z-10">
//       <Image className="w-full h-full object-cover mask-l-from-50%" src={ELDERLY} alt="caregiver" width={1280} height={856}
//              placeholder={"blur"} />
//     </div>
//   </div>
//   <div className="p-4">Text</div>
// </div>
