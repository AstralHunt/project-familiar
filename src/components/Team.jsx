import React from 'react';
import TeamCards from "@/components/TeamCards";


const Team = ({image, name, role, description, linkedin, github}) => {
  return (
    <div id="team" className=" w-screen h-[20rem] pl-[10vw] pr-[10vw] md:scroll-mt-30">
      <div className="bg-white h-full w-full">
        <h3>Meet the talented people who made this happen</h3>
        <div className="flex">
          <TeamCards />

        </div>
      </div>
    </div>
  );
};

export default Team;
