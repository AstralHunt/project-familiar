import React from 'react';
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const TeamCards = ({image, name, role, description, linkedin, github}) => {
  return (
    <div className="flex grow-0 flex-col justify-center items-center text-center max-[248px]">
      <div className="w-[248px] h-[248px] rounded-full overflow-hidden mb-4">
        <Image src={image} alt="team member" width={300} height={300} />
      </div>
      <div className="flex flex-col justify-center items-center mb-4 md:gap-0">
        <h6 className="!font-bold">{name}</h6>
        <h6 className="!text-[14px] !leading-[1.5rem]">{role}</h6>
      </div>
      <h6>{description}</h6>
      <div className="flex gap-4 justify-center">
        <h4><a className="text-primary font-bold underline" target="_blank" rel="noreferrer"
               href={linkedin}><FaLinkedin/> </a></h4>
        {github && (
          <h4><a className="text-primary font-bold underline" target="_blank" rel="noreferrer"
                 href={github}><FaGithub/></a></h4>
        )}
      </div>
    </div>
  );
};

export default TeamCards;
