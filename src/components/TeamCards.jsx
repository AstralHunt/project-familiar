import React from 'react';
import Image from "next/image";

const TeamCards = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 w-full md:w-[50vw] text-justify">
      <div>
        <Image src={image} alt="team member" width={300} height={300} />
      </div>
      <h1>asd</h1>
    </div>
  );
};

export default TeamCards;
