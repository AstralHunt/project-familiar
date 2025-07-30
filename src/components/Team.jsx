import React from 'react';
import TeamCards from "@/components/TeamCards";
import POCHOLO from "../../public/POCHOLO.jpeg";
import JOHNSEN from "../../public/JOHNSEN.jpg";
import PREETI from "../../public/PREETI.jpeg";
import MAYANK from "../../public/MAYANK.jpg";
import KENTO from "../../public/KENTO.jpeg";
import SAHIL from "../../public/SAHIL.jpeg";
import TEJINDER from "../../public/TEJINDER.jpeg";

const Team = () => {
  return (
    <div id="team" className="w-screen px-4 md:px-[10vw] md:scroll-mt-30 pb-8 md:pb-20">
    <div className="bg-white h-full w-full">
      <h3 className="mb-10 md:mb-20 text-center md:text-left">Meet the talented people who made this happen</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-10 w-full md:my-10">
      <TeamCards image={POCHOLO} name="Pocholo Renzo D.G. Lamagna" role={"Project Manager | Full-Stack Developer"} github={"https://github.com/AstralHunt"} linkedin={"https://www.linkedin.com/in/pocholo-renzo-lamagna"} />
          <TeamCards image={PREETI} name="Preeti Rawat" role={"Lead | Full-Stack Developer"} github={"https://github.com/RawatPreeti"} linkedin={"https://www.linkedin.com/in/preetirawat-dev"} />
          <TeamCards image={JOHNSEN} name="Johnsen Dela Cruz" role={"Full-Stack Developer"} github={"https://github.com/JamonSTG"} linkedin={"https://www.linkedin.com/in/johnsen-darelle-dela-cruz"} />
          <TeamCards image={MAYANK} name="Mayank Abrol" role={"Full-Stack Developer"} github={"https://github.com/mayankabrol1"} linkedin={"https://www.linkedin.com/in/mayank-abrol"} />
          <TeamCards image={KENTO} name="Kento Nakajima" role={"Full-Stack Developer"} github={"https://github.com/Kento0315"} linkedin={"https://www.linkedin.com/in/kento-nakajima"} />
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-16 w-full md:my-10 max-w-2xl mx-auto">
      <TeamCards image={SAHIL} name="Sahil Juneja" role={"UI/UX Designer"} linkedin={"www.linkedin.com/in/sahil-juneja"} />
          <TeamCards image={TEJINDER} name="Tejinder Kaur" role={"UI/UX Designer"} linkedin={"www.linkedin.com/in/tejinder-kaur"} />
        </div>
      </div>
    </div>
  );
};

export default Team;
