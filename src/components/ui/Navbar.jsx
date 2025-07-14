"use client"
import {useState, useEffect} from 'react';
import LOGO from "../../../public/LOGO.svg";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <div
      className={`fixed flex top-0 w-full bg-white shadow-md z-50 px-4 md:px-[10vw] transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
    <nav className="flex justify-between w-full items-center h-20 md:h-32 py-4 md:py-8">
        <div className="flex justify-between md:justify-start md:basis-4/5 md:gap-12 w-full items-center">
        <div className="py-1">
          <div className="flex">
            <div className="w-[50px] h-[50px]">
              <Image
                src={LOGO}
                alt="logo"
                width={300}
                height={300}
              /></div>
            <a href="" className="text-5xl text-[#176F9C] font-bold">Familiar</a></div>
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
          <ul
            className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-20 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 md:space-x-8 items-start md:items-center py-4 md:divide-x divide-gray-400 shadow-lg md:shadow-none`}>
          <li className="flex flex-col pr-5" onClick={() => setIsMenuOpen(false)}>
              <a href="#story" className="text-[#E05426] opacity-90 hover:text-gray-600 font-bold">DEMENTIA</a>
              <p className="text-xs  opacity-70">The problem</p>
            </li>
            <li className="flex flex-col pr-5" onClick={() => setIsMenuOpen(false)}>
              <a href="#elderly" className="text-primary hover:text-gray-600 font-bold">ELDERLY</a>
              <p className="text-xs opacity-70">Help remember</p>
            </li>
            <li className="flex flex-col pr-5" onClick={() => setIsMenuOpen(false)}>
              <a href="#caregiver" className="text-primary hover:text-gray-600 font-bold">CAREGIVERS</a>
            <p className="text-xs opacity-70">Provide assistance</p>
            </li>
              <li className="flex flex-col pr-5" onClick={() => setIsMenuOpen(false)}>
                <a href="#team" className="text-primary hover:text-gray-600 font-bold">THE TEAM</a>
              <p className="text-xs opacity-70">Who we are</p>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex justify-end basis-1/5">
        <a href="" className="text-lg font-bold bg-primary  pt-3 pb-3 pl-5 pr-5 rounded-xl text-white">Login</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
