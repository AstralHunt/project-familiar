import React from 'react';
import Image from "next/image";
import CAREGIVER from "../../public/Caregiver.jpeg";

const Caregiver = () => {
  return (
    <div id="caregiver" className="w-screen min-h-[30rem] md:h-[50rem] px-[10vw] md:scroll-mt-30">
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full basis-1/2 md:w-[50vw] h-[300px] md:h-auto">
          <Image className="w-full h-full object-cover" src={CAREGIVER} alt="caregiver" width={1280} height={856}
                 placeholder={"blur"}/>
        </div>
        <div className="w-full basis-1/2 md:w-[50vw] bg-primary p-8 md:p-12">
          <div className="flex flex-col items-center justify-center text-center pt-[10%]">
            <h2 className="text-white text-2xl md:text-4xl mb-4">Caregivers</h2>
            <h6 className="text-white/90 text-sm md:text-base md:px-[10%] lg:px-[20%]">
              Family members and care workers are provided with an arsenal of tools to monitor and help the ones they care for.
            </h6>
          </div>
        </div>
      </div>
      <div className="p-4">Text</div>
    </div>
  );
};

export default Caregiver;
