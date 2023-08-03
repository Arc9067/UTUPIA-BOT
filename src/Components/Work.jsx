import React from "react";
import heroSpahe from "../assets/hero-shape.svg";
import youtube from "../assets/youtube.svg";
import gitBook from "../assets/gitBook.svg";
import join from "../assets/join.svg";

const Work = () => {
  return (
    <section className="pt-14 md:pt-52 pb-14 w-full relative bg-[#FF8226] text-white">
      <div className="container gap-16 grid grid-cols-1 lg:grid-cols-2 justify-between items-center">
        <article className="">
          <h1 className="text-white text-5xl font-bold leading-[67.20px] tracking-wide">
            How Does It Work?
          </h1>
          <p className="max-w-[456px] text-white text-xl font-normal leading-loose tracking-tight">
            Setting up your Wagie is quite straightforward. Simply message the
            bot on Telegram or Discord and you're good to go.
          </p>
        </article>

        <div className="w-full justify-start items-center gap-4 inline-flex flex-col lg:flex-row">
          <div className="pl-[44.12px] w-full pr-[44.88px] pt-[78px] pb-[78.31px] bg-orange-50 rounded-2xl flex-col justify-center items-center inline-flex">
            <div className="self-stretch flex-col justify-start items-start gap-[30.69px] inline-flex">
              <img className="w-10 h-10" src={youtube} />
              <div className="text-black text-[26.54px] font-bold leading-[37.16px] tracking-wide">
                Watch The
                <br />
                Video Guides
              </div>
            </div>
          </div>
          <div className="flex-col w-full justify-start items-start gap-[12.44px] inline-flex">
            <div className="pl-[31.54px] w-full pr-[30.46px] pt-[79.62px] pb-[76.68px] bg-orange-50 rounded-2xl flex-col justify-center items-center flex">
              <div className="self-stretch flex-col justify-start items-start gap-[30.69px] inline-flex">
                <img className="w-10 h-10" src={gitBook} />
                <div className="text-black text-[26.54px] font-bold leading-[37.16px] tracking-wide">
                  Read Full
                  <br />
                  Documentation
                </div>
              </div>
            </div>
            <div className="pl-[50.12px] w-full pr-[62.88px] pt-[76.62px] pb-[73.68px] bg-orange-50 rounded-2xl flex-col justify-center items-center flex">
              <div className="self-stretch w-full flex-col justify-start items-start gap-[30.69px] inline-flex">
                <img className="w-[46px] h-[46px]" src={join} />
                <div className="text-black text-[26.54px] font-bold leading-[37.16px] tracking-wide">
                  Join The <br />
                  Community
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
