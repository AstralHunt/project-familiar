import React from 'react';
import Image from "next/image";
import CAREGIVER from "../../public/Caregiver.jpeg";
import {PiHeadCircuitFill} from "react-icons/pi";
import DASHBOARD from "../../public/Dashboard.png";
import DASHBOARD2 from "../../public/Dashboard2.png";
import SCHEDULE from "../../public/Schedule.png";
import FeatureCards from "@/components/FeatureCards";
import WRITING from "../../public/writing.png";

const Caregiver = () => {
  return (
    <div id="caregiver" className="flex flex-col pb-10 md:gap-12 md:pb-40 w-screen min-h-[30rem] mb-5 md:px-[10vw] md:scroll-mt-30">
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full basis-1/2 md:w-[50vw] h-[300px] md:h-auto">
          <Image className="w-full h-full object-cover" src={CAREGIVER} alt="caregiver" width={1280} height={856}
                 placeholder={"blur"}/>
        </div>
        <div className="w-full basis-1/2 md:w-[50vw] bg-primary p-8 md:p-12">
          <div className="flex flex-col items-center justify-center text-center pt-[10%]">
            <h2 className="text-white text-2xl md:text-4xl mb-4">For the Caregivers</h2>
            <h6 className="text-white/90 text-sm md:text-base md:px-[10%] lg:px-[20%]">

              <br/>
              <br/>
              The Caregiver Portal is designed to help caregivers manage their patients' care and provide them with the tools they need to stay monitor the patient's mental condition and manage their data.
              <br/>
            </h6>
          </div>
        </div>
      </div>
      {/*CARDS*/}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-20 justify-start items-center md:px-0">
        <FeatureCards icon={"graph"} image={DASHBOARD2} title={"Dashboard Patient Monitoring"} description={"Family members and care workers are provided with an arsenal of tools to monitor and help the ones they care for."} position={"none"}></FeatureCards>

        <FeatureCards icon={"profile"} image={SCHEDULE} title={"Patient Account Creation"} description={"Family members and care workers are provided with an arsenal of tools to monitor and help the ones they care for.\n"} position={"none"}></FeatureCards>

        <FeatureCards icon={"schedule"} image={SCHEDULE} title={"Schedule Management"} description={"Family members and care workers are provided with an arsenal of tools to monitor and help the ones they care for.\n"} position={"none"}></FeatureCards>

        <FeatureCards icon={"people"} image={SCHEDULE} title={"Relations Data Management"} description={"Family members and care workers are provided with an arsenal of tools to monitor and help the ones they care for.\n"} position={"none"}></FeatureCards>

        <FeatureCards icon={"book"} image={SCHEDULE} title={"Diary Monitoring"} description={"Family members and care workers are provided with an arsenal of tools to monitor and help the ones they care for.\n"} position={"none"}></FeatureCards>

      </div>
    </div>
  );
};

export default Caregiver;
