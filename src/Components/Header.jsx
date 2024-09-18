import React from "react";
import { FaBars } from "react-icons/fa";


const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center justify-center gap-2 ">
        <img className="w-10 h-10 ml-5" src="./assets/4.svg" alt="logo" />
        {/* <button className="bg-gradient-to-r from-orange-400 to-red-400 text-xs text-white px-2.5 py-1.5 rounded-2xl">
          Hosterr is hiring
        </button> */}
      </div>
      <ul className="hidden lg:flex justify-between items-center font-lato text-gray-700 gap-6">
        <li className="hover:bg-gray-200 text-black font-bold px-2.5 py-1.5 rounded 2xl"><a href="#">Plans</a></li>
        <li className="hover:bg-gray-200 text-black font-bold px-2.5 py-1.5 rounded 2xl"><a href="#">Find Domain</a></li>
        <li className="hover:bg-gray-200 text-black font-bold px-2.5 py-1.5 rounded 2xl"><a href="#">Why Fasal Margi</a></li>
      </ul>
      <div className="hidden lg:flex items-center justify-center font-lato gap-6">
        <a className="text-gray-400" href="#">Sign In</a>
        <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white">Join Waitlist</button>
      </div>
      <div className="lg:hidden ">
        <FaBars />
      </div>
    </div>
  );
};


export default Header;