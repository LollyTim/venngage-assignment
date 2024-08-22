import React from "react";

const Header = () => {
  return (
    <header className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center items-center ">
        <div className="w-full sm:w-4/5 bg-[#c52c25] p-6 h-[200px] sm:p-8 lg:p-12 rounded-t sm:rounded-l sm:rounded-tr-none">
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
            Resume Converter
          </h1>
          <div className="flex items-center w-full">
            <div className="flex-grow border-t border-white"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white"></div>
          </div>
        </div>
        <div className="w-full sm:w-1/5 bg-[#96150f] h-16 sm:h-56 rounded-b sm:rounded-r sm:rounded-bl-none"></div>
      </div>
    </header>
  );
};

export default Header;
