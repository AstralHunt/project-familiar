import React from 'react';
import Image from "next/image";
import CAREGIVER from "../../public/Caregiver.jpeg";
import {PiHeadCircuitFill} from "react-icons/pi";
import DASHBOARD from "../../public/Dashboard.png";
import DASHBOARD2 from "../../public/Dashboard2.png";
import SCHEDULE from "../../public/Schedule.png";
import FeatureCards from "@/components/FeatureCards";

const Caregiver = () => {
  return (
    <div id="caregiver" className="flex flex-col gap-6 pb-10 w-screen min-h-[30rem] px-[10vw] md:scroll-mt-30">
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full basis-1/2 md:w-[50vw] h-[300px] md:h-auto">
          <Image className="w-full h-full object-cover" src={CAREGIVER} alt="caregiver" width={1280} height={856}
                 placeholder={"blur"}/>
        </div>
        <div className="w-full basis-1/2 md:w-[50vw] bg-primary p-8 md:p-12">
          <div className="flex flex-col items-center justify-center text-center pt-[10%]">
            <h2 className="text-white text-2xl md:text-4xl mb-4">Caregivers</h2>
            <h5 className="text-white/90 text-sm md:text-base md:px-[10%] lg:px-[20%]">
              Family members and care workers are provided with an arsenal of tools to monitor and help the ones they care for.
            </h5>
          </div>
        </div>
      </div>
      {/*CARDS*/}
      <div className="flex flex-col gap-24 justify-center items-center px-20">
        <FeatureCards icon={"graph"} image={DASHBOARD2} title={"Dashboard Patient Monitoring"} description={"Family members and care workers are provided with an arsenal of tools to monitor and help the ones they care for."} position={"left"}></FeatureCards>


        <FeatureCards icon={"head"} image={SCHEDULE} title={"Synced Scheduler"} description={"Family members and care workers are provided with an arsenal of tools to monitor and help the ones they care for.\n"} position={"right"}></FeatureCards>

      </div>
    </div>
  );
};

export default Caregiver;
