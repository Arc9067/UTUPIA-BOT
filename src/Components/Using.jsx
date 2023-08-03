import React from "react";
import heroShape from "../assets/hero-shape.svg";
import power from "../assets/power.svg";

const Using = () => {
  return (
    <section className="pt-36 bg-[#FF8226] md:pt-52 pb-14 w-full relative">
      <div className="container gap-16 grid grid-cols-1 lg:grid-cols-2 justify-between items-center">
        <article className="">
          <h1 className="text-white text-5xl font-bold leading-[78.40px] tracking-wide">
            Who's Using <br />
            UtopiaBot
          </h1>
          <p className="max-w-[425px] text-white text-base font-normal leading-10 tracking-tight">
            Join lots of other communities that keep their WagieBots hard at
            work.
          </p>
        </article>
        <div className="mx-auto w-full flex-col justify-start items-start gap-[36.46px] inline-flex">
          <div className="justify-start items-start gap-[33.04px] inline-flex">
            <div className="w-[80px] h-[80px] p-[26.66px] bg-white rounded-[888.70px] justify-center items-center flex">
              <img className="w-20 h-20" src={power} />
            </div>
            <div className="w-[80px] h-[80px] p-[26.66px] bg-white rounded-[888.70px] justify-center items-center flex">
              <img className="w-20 h-20" src={power} />
            </div>
            <div className="w-[80px] h-[80px] p-[26.66px] bg-white rounded-[888.70px] justify-center items-center flex">
              <img className="w-20 h-20" src={power} />
            </div>
          </div>
          <div className="justify-start items-start gap-[33.04px] inline-flex">
            <div className="w-[80px] h-[80px] p-[26.66px] bg-white rounded-[888.70px] justify-center items-center flex">
              <img className="w-20 h-20" src={power} />
            </div>
            <div className="w-[80px] h-[80px] p-[26.66px] bg-white rounded-[888.70px] justify-center items-center flex">
              <img className="w-20 h-20" src={power} />
            </div>
            <div className="w-[80px] h-[80px] p-[26.66px] bg-white rounded-[888.70px] justify-center items-center flex">
              <img className="w-20 h-20" src={power} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Using;
