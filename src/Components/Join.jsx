import React from "react";
import heroShape from "../assets/bottom-shape.svg";
import toShape from "../assets/hero-shape.svg";
import Robot from "../assets/robot2.svg";

const Join = () => {
  return (
    <section className="py-36 md:py-52 w-full relative">
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

      <div className="container relative z-10 ">
        <div className="w-full p-10 gap-10 bg-[#906487] rounded-[20px] flex justify-center items-center flex-col text-center">
          <h1 className="text-white text-5xl font-bold leading-[67.20px] tracking-wide">
            Wanna Try UtopiaBot Out?
          </h1>
          <p className="text-white text-xl font-normal leading-7 tracking-tight">
            Join the closed beta now!
          </p>
          <div className=" justify-start items-start gap-3 flex-col md:flex-row flex">
            <div className="w-[226px] px-[21px] py-2 bg-white rounded-full flex-col justify-center items-center gap-2.5 inline-flex">
              <div className="justify-center items-center gap-3 inline-flex">
                <div className="w-6 h-6 relative">
                  <div className="w-6 h-6 left-0 top-0 absolute">
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1976_384)">
                        <path
                          d="M12.0094 24.5187C18.6419 24.5187 24.0187 19.1419 24.0187 12.5094C24.0187 5.87677 18.6419 0.5 12.0094 0.5C5.37677 0.5 0 5.87677 0 12.5094C0 19.1419 5.37677 24.5187 12.0094 24.5187Z"
                          fill="url(#paint0_linear_1976_384)"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5.42498 12.3785C8.92303 10.8446 11.2613 9.85321 12.4398 9.36685C15.7695 7.98259 16.4616 7.73941 16.9106 7.7207C17.0041 7.7207 17.2286 7.73941 17.3782 7.85165C17.4905 7.94518 17.5279 8.07612 17.5466 8.16965C17.5653 8.26318 17.584 8.46895 17.5653 8.63731C17.3782 10.5266 16.6113 15.147 16.1997 17.2608C16.0314 18.1587 15.6947 18.458 15.3767 18.4954C14.6845 18.5516 14.142 18.0278 13.4686 17.5976C12.4211 16.9054 11.8225 16.4752 10.7936 15.8018C9.61516 15.0161 10.3821 14.5859 11.0555 13.8937C11.2239 13.7067 14.3104 10.9195 14.3665 10.6576C14.3665 10.6202 14.3852 10.5079 14.3104 10.4518C14.2356 10.3957 14.142 10.4144 14.0672 10.4331C13.955 10.4518 12.2714 11.5742 8.99786 13.7815C8.5115 14.1182 8.08126 14.2679 7.68843 14.2679C7.25818 14.2679 6.43511 14.0247 5.81781 13.8189C5.06956 13.5757 4.47097 13.4448 4.52709 13.0333C4.5645 12.8275 4.8638 12.603 5.42498 12.3785Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_1976_384"
                          x1="0"
                          y1="12.5007"
                          x2="24.0013"
                          y2="12.5007"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#2AABEE" />
                          <stop offset="1" stop-color="#229ED9" />
                        </linearGradient>
                        <clipPath id="clip0_1976_384">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(0 0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-1 inline-flex">
                  <div className="text-black text-xs font-normal leading-none tracking-tight">
                    Launch UtupiaBot on
                  </div>
                  <div className="text-black text-base font-bold leading-snug tracking-tight">
                    TELEGRAM
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[226px] px-[21px] py-2 bg-white rounded-full flex-col justify-center items-center gap-2.5 inline-flex">
              <div className="justify-center items-center gap-3 inline-flex">
                <div className="w-[30.88px] h-6 relative">
                  <svg
                    width="32"
                    height="25"
                    viewBox="0 0 32 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1976_394)">
                      <path
                        d="M26.716 2.50165C24.6912 1.55428 22.5492 0.881129 20.3465 0.5C20.0721 0.99604 19.7515 1.66322 19.5305 2.19399C17.1555 1.83688 14.8025 1.83688 12.4712 2.19399C12.2502 1.66334 11.9225 0.99604 11.6455 0.5C9.44067 0.881305 7.2968 1.55617 5.27107 2.50659C1.24004 8.59813 0.147255 14.5382 0.693587 20.3942C3.36724 22.3908 5.95827 23.6037 8.50565 24.3974C9.13873 23.5268 9.69837 22.605 10.1788 21.6417C9.26415 21.2935 8.38242 20.8644 7.54408 20.3595C7.7647 20.1959 7.98012 20.0255 8.19003 19.8485C13.2701 22.2246 18.7898 22.2246 23.8093 19.8485C24.0201 20.0243 24.2355 20.1947 24.4552 20.3595C23.6155 20.8657 22.7321 21.2957 21.8156 21.6442C22.2988 22.6115 22.8574 23.5341 23.4888 24.3998C26.0386 23.6062 28.632 22.3933 31.3056 20.3942C31.9468 13.6057 30.2106 7.72014 26.716 2.50165ZM10.8709 16.7929C9.34589 16.7929 8.09524 15.3691 8.09524 13.6355C8.09524 11.9018 9.31924 10.4757 10.8709 10.4757C12.4227 10.4757 13.6732 11.8993 13.6466 13.6355C13.649 15.3691 12.4227 16.7929 10.8709 16.7929ZM21.1283 16.7929C19.6033 16.7929 18.3528 15.3691 18.3528 13.6355C18.3528 11.9018 19.5766 10.4757 21.1283 10.4757C22.6801 10.4757 23.9307 11.8993 23.904 13.6355C23.904 15.3691 22.6801 16.7929 21.1283 16.7929Z"
                        fill="#5865F2"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1976_394">
                        <rect
                          width="30.88"
                          height="24"
                          fill="white"
                          transform="translate(0.5625 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="flex-col justify-start items-start gap-1 inline-flex">
                  <div className="text-black text-xs font-normal leading-none tracking-tight">
                    Launch UtupiaBot on
                  </div>
                  <div className="text-black text-base font-bold leading-snug tracking-tight">
                    DISCORD
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
