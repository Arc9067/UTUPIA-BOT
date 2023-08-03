import React from "react";
import footerLogo from "../assets/footerLogo.svg";

const Footer = () => {
  return (
    <footer className="py-10 w-full bg-[#FF8226] text-white">
      <div className="container flex flex-col justify-center items-center gap-10">
        <div className="grid w-full gap-y-10 grid-cols-1 md:grid-cols-4 justify-between gap-x-5">
          <img src={footerLogo} alt="" />

          <div className="w-[93px] h-[214px] flex-col justify-start items-start gap-8 inline-flex">
            <div className="text-white text-base font-bold leading-snug tracking-tight">
              MENU
            </div>
            <div className="flex-col justify-start items-start gap-6 flex">
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                Home
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                About
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                Tokenomics
              </div>
              <div className="text-white text-base font-normal leading-snug tracking-tight">
                Roadmap
              </div>
            </div>
          </div>

          <div className="w-[209px] h-[328px] flex-col justify-start items-start gap-8 inline-flex">
            <div className="text-white text-base font-bold leading-snug tracking-tight">
              CONNECT
            </div>
            <div className="flex-col justify-start items-start gap-6 flex">
              <a
                href=""
                target="_blank"
                className="text-white text-base font-normal leading-snug tracking-tight"
              >
                Tg public group
              </a>
              <a
                href=""
                target="_blank"
                className="text-white text-base font-normal leading-snug tracking-tight"
              >
                Tg private group for token <br />
                holders 1% above
              </a>
              <a
                href=""
                target="_blank"
                className="text-white text-base font-normal leading-snug tracking-tight"
              >
                Twitter
              </a>
              <a
                href=""
                target="_blank"
                className="text-white text-base font-normal leading-snug tracking-tight"
              >
                Whitepaper
              </a>
              <a
                href=""
                target="_blank"
                className="text-white text-base font-normal leading-snug tracking-tight"
              >
                Gitbook
              </a>
              <a
                href=""
                target="_blank"
                className="text-white text-base font-normal leading-snug tracking-tight"
              >
                Roadmap
              </a>
            </div>
          </div>
          <a
            href=""
            className="w-max h-max px-8 py-4 bg-[#906487] rounded shadow border border-white justify-center items-center gap-2.5 inline-flex"
          >
            <div className="text-white text-base font-bold leading-snug tracking-tight">
              LAUNCH UTOPIA
            </div>
          </a>
        </div>

        <div className="text-white text-xl font-normal leading-9">
          Copyright © 2023 UtopiaBot. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
