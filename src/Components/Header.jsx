import React from "react";

const Header = () => {
  return (
    <header className="py-4 w-full absolute top-0 bg-orange-100 z-50">
      <nav className="container flex justify-between items-center">
        <h1 className="text-black text-2xl font-extrabold leading-[33.60px] tracking-wide">
          UTUPIA BOT
        </h1>
        <div className="justify-between items-start gap-8 lg:flex hidden">
          <div className="text-black cursor-pointer text-base font-normal leading-snug tracking-tight">
            Features
          </div>
          <div className="text-black cursor-pointer text-base font-normal leading-snug tracking-tight">
            About Us
          </div>
          <div className="text-black cursor-pointer text-base font-normal leading-snug tracking-tight">
            Changelog
          </div>
          <div className="text-black cursor-pointer text-base font-normal leading-snug tracking-tight">
            Documnetation
          </div>
        </div>
        <a
          href=""
          className=" px-8 py-4 bg-[#906487] rounded shadow border border-white justify-center items-center gap-2.5 hidden md:inline-flex"
        >
          <div className="text-white text-base font-bold leading-snug tracking-tight">
            LAUNCH UTOPIA
          </div>
        </a>
      </nav>
    </header>
  );
};

export default Header;
