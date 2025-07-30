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
    <div id="caregiver" className="flex flex-col pb-10 md:gap-12 md:pb-30 w-screen min-h-[30rem] mb-5 md:px-[10vw] md:scroll-mt-30">
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full basis-1/2 md:w-[50vw] h-[300px] md:h-auto">
          <Image className="w-full h-full object-cover" src={CAREGIVER} alt="caregiver" width={1280} height={856}
                 placeholder={"blur"}/>
        </div>
        <div className="w-full basis-1/2 md:w-[50vw] bg-primary p-8 md:p-12">
          <div className="flex flex-col items-center justify-center text-center pt-[10%]">
            <h2 className="text-white text-2xl md:text-4xl mb-4">For the Caregivers</h2>
            <h6 className="text-white/90 text-sm md:text-base md:mx-[10%] lg:mx-[15%]">
              The Caregiver Portal is designed to help caregivers manage their patients' data and provides them with tools to monitor the patient's mental condition.
              <br/>
              <br/>
              This includes a dashboard that provides an overview to all patients, and modules that let caregivers manage data for patient's features remotely.
              <br/>
            </h6>
          </div>
        </div>
      </div>
      {/*CARDS*/}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-14 justify-start items-center md:px-0">
        <FeatureCards icon={"graph"} image={DASHBOARD2} title={"Dashboard Patient Monitoring"} description={"Monitor patients under your care by showing each patient's cognitive scores and reminders."} position={"none"}></FeatureCards>

        <FeatureCards icon={"profile"} image={SCHEDULE} title={"Patient Account Creation"} description={"Simple registration process let caregivers set up new patient profiles with ease."} position={"none"}></FeatureCards>

        <FeatureCards icon={"schedule"} image={SCHEDULE} title={"Schedule Management"} description={"Create, edit, and organize daily routines that is synced with the patient device."} position={"none"}></FeatureCards>

        <FeatureCards icon={"people"} image={SCHEDULE} title={"Relations Data Management"} description={"Remotely organize patient's family photos and relationship connections through caregiver device."} position={"none"}></FeatureCards>

        <FeatureCards icon={"book"} image={SCHEDULE} title={"Diary Monitoring"} description={"Read and review patient diary entries to stay informed about their daily thoughts and concerns."} position={"none"}></FeatureCards>

      </div>
    </div>
  );
};

export default Caregiver;
