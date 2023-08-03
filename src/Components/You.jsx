import React from "react";
import heroShape from "../assets/bottom-shape.svg";
import toShape from "../assets/hero-shape.svg";

import logo from "../assets/logo.svg";
import Robot from "../assets/robot2.svg";

const You = () => {
  return (
    <section className="pt-36 md:pt-52 pb-14 md:pb-40 w-full relative">
      <img
        src={Robot}
        alt=""
        className="absolute right-0 opacity-50 bottom-24 hidden md:block"
      />
      <img
        src={heroShape}
        alt=""
        className="absolute top-0 w-full pointer-events-none"
      />
      <img
        src={toShape}
        alt=""
        className="absolute bottom-0 w-full pointer-events-none"
      />
      <div className="container relative z-10 grid gap-16 grid-cols-1 lg:grid-cols-2 justify-between items-center">
        <img src={logo} alt="logo" className="mx-auto w-10/12 md:w-fit" />

        <article className="flex flex-col">
          <h1 className="text-black text-4xl font-bold leading-[50.40px] tracking-wide">
            The Bot That Works For You
          </h1>
          <p className="max-w-[505px] text-black text-xl font-normal leading-10 tracking-tight">
            Wagie is a custom-built bot, designed with your convenience in mind.
            It's a mobile-ready solution that you can use anytime, anywhere.
          </p>
        </article>
      </div>
    </section>
  );
};

export default You;
