"use client"
import React from 'react';
import Image from "next/image";
import ELDERLY from "../../public/Elderly.jpeg";

const Elderly = () => {
  return (
    <div id="caregiver" className="w-screen min-h-[30rem] md:h-[50rem] px-[10vw] md:scroll-mt-30">
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full basis-1/2 md:w-[50vw] bg-primary p-8 md:p-12">
          <div className="flex flex-col items-center justify-center text-center pt-[10%]">
            <h2 className="text-white text-2xl md:text-4xl mb-4">Elderly</h2>
            <h6 className="text-white/90 text-sm md:text-base md:px-[10%] lg:px-[20%]">
              From diaries to cognitive games, Familiar considers the patient's needs to remember the ones that love them the most, their family members
            </h6>
          </div>
        </div>
        <div className="w-full basis-1/2 md:w-[50vw] h-[300px] md:h-auto">
          <Image className="w-full h-full object-cover" src={ELDERLY} alt="caregiver" width={1280} height={856}
                 placeholder={"blur"}/>
        </div>
      </div>
      <div className="p-4">Text</div>
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
