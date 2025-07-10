

const Navbar = () => {
  return (
    <div className="fixed flex top-0 w-full bg-white shadow-md z-50 pl-[10vw] pr-[10vw]">
      <nav className="flex justify-between w-full items-center h-32 py-8">
        <div className="flex justify-start basis-4/5 gap-12 w-full items-center">
          <div className="py-1">
            <a href="" className="text-5xl text-[#176F9C] font-bold">Familiar</a>
          </div>
          <ul className="flex space-x-8 items-center py-4 divide-x divide-gray-400">
            <li className="flex flex-col pr-5">
              <a href="#story" className="text-[#E05426] opacity-90 hover:text-gray-600 font-bold">DEMENTIA</a>
              <p className="text-xs  opacity-80">The Problem</p>
            </li>
            <li className="flex flex-col pr-5"><a href="#elderly" className="text-[#176F9C] hover:text-gray-600 font-bold">ELDERLY</a>
              <p className="text-xs opacity-80">Help Remember</p>
            </li>
            <li className="flex flex-col pr-5"><a href="#caregiver" className="text-[#176F9C] hover:text-gray-600 font-bold">CAREGIVERS</a>
            <p className="text-xs opacity-80">Provide Assistance</p>
            </li>
              <li className="flex flex-col pr-5"><a href="#team" className="text-[#176F9C] hover:text-gray-600 font-bold">THE TEAM</a>
              <p className="text-xs opacity-80">Who We Are</p>
            </li>
          </ul>
        </div>
        <div className="flex justify-end basis-1/5 ">
          <a href="" className="text-xl font-bold bg-[#176F9C] pt-2 pb-2 pl-4 pr-4 rounded-xl text-white">View Site</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
