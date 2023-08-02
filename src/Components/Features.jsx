import React from "react";
import heroSpahe from "../assets/bottom-shape.svg";

const Features = () => {
  return (
    <section className="pt-36 md:pt-52 pb-14 w-full relative">
      <img
        src={heroSpahe}
        alt=""
        className="absolute top-0 w-full pointer-events-none"
      />
      <div className="container gap-16 flex flex-col justify-center items-center">
        <h1 className="text-black text-center text-5xl font-bold leading-[67.20px] tracking-wide">
          A Short List of Features
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-between items-center gap-10">
          <div className="w-[377.50px] bg-red-600 h-[482px] relative">
            <div className=" h-[461.60px] pl-[27px] pr-[53px] pt-[34.80px] pb-[54.80px] left-[8.50px] top-[10.20px] absolute bg-orange-200 border border-orange-500 flex-col justify-start items-center inline-flex">
              <div className="self-stretch h-[372px] flex-col justify-start items-start gap-6 inline-flex">
                <div className="justify-start items-center gap-4 inline-flex">
                  <div className="w-12 h-12 relative" />
                  <div className="text-black text-xl font-bold leading-7 tracking-tight">
                    Infra & Security
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-[31px] flex">
                  <div className="text-black text-base font-normal leading-snug tracking-tight">
                    🤖 Security with 2FA (two factor <br />
                    auth using google auth on your phone)
                  </div>
                  <div className="text-black text-base font-normal leading-snug tracking-tight">
                    🤖 Auto detection of Chain, Dex & Pairs
                  </div>
                  <div className="text-black text-base font-normal leading-snug tracking-tight">
                    🤖 Copy trading with private <br />
                    transaction detection
                  </div>
                  <div className="text-black text-base font-normal leading-snug tracking-tight">
                    🤖 Alpha Channel & Alpha Bot with <br />
                    fast snipe shortcut
                  </div>
                  <div className="text-black text-base font-normal leading-snug tracking-tight">
                    🤖 BloxRoute integration
                  </div>
                </div>
              </div>
            </div>
            <div className="w-5 h-5 left-[0.50px] top-0 absolute bg-orange-500" />
            <div className="w-5 h-5 left-[357.50px] top-0 absolute bg-orange-500" />
            <div className="w-5 h-5 left-[356.75px] top-[459px] absolute bg-orange-500" />
            <div className="w-5 h-5 left-0 top-[462px] absolute bg-orange-500" />
          </div>
        </div>{" "}
      </div>
    </section>
  );
};

export default Features;
