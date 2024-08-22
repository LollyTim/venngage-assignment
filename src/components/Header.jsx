import React from "react";

const Header = () => {
  return (
    <header className="  h-[200px] w-[90%] flex flex-row justify-center items-center mt-2">
      <div className="w-[80%] bg-[#c52c25] h-[88%]  justify-center items-start  flex flex-col ">
        <h1 className=" text-white text-[60px] ml-6 font-bold">
          Resume Converter
        </h1>
        <div className=" flex flex-row w-[81%] items-center">
          <div className=" flex flex-col w-[80%] border-t border-white"></div>
          <div className=" w-3 h-3 justify-center items-center rounded-full bg-white"></div>
        </div>
      </div>
      <div className=" w-[20%] bg-[#96150f] h-full"></div>
    </header>
  );
};

export default Header;
