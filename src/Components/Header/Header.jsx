import React from "react";

import { GiRoundShield } from "react-icons/gi";
import { FaArrowDown } from "react-icons/fa";
import icon from "../../Assets/image 3.png";

const Header = ({isActive, setActive}) => {
  return (
    <div className="fixed top-0 left-0 right-0 flex flex-col sm:flex-row w-full  bg-gray-500 h-28">
   
      <div className="sm:h-full sm:w-56   bg-gray-500 flex items-center justify-center h-16 sm:shadow-lg">
        <img
          src={icon}
          className="h-full w-full object-contain"
          alt="Header Icon"
        />
      </div>

     
      <div className="flex flex-col sm:flex-row w-full sm:w-5/6">
       
     
        <div className="sm:bg-custombgBlue hidden md:block md:h-full w-full sm:w-5/6"></div>

        <div className="sm:bg-custombgBlue h-full w-full md:w-3/6 flex items-center  sm:gap-2">
          

          <button 
          onClick={()=>setActive(!isActive)}
          className="flex items-center bg-white p-4 rounded-lg shadow-2xl hover:shadow-xl h-14 sm:h-10 sm:hidden">
            <FaArrowDown size={25} color="black"/>
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Header;
