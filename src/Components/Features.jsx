import React from "react";
import heroSpahe from "../assets/bottom-shape.svg";
import heroShape from "../assets/hero-shape.svg";
import Shape from "../assets/hero-shape.svg";
import Robot from "../assets/robot.svg";

const Features = () => {
  return (
    <section className="pt-36 md:pt-52 w-full relative">
      <img
        src={heroSpahe}
        alt=""
        className="absolute top-0 w-full pointer-events-none"
      />

      <img src={Robot} alt="" className="absolute bottom-32 hidden md:block" />
      <div className="container gap-16 flex flex-col justify-center items-center">
        <h1 className="text-black text-center text-5xl font-bold leading-[67.20px] tracking-wide">
          A Short List of Features
        </h1>
        <div className="grid w-full z-10 grid-rows-1 grid-cols-1 lg:grid-cols-3 justify-between items-stretch gap-10">
          <article className="p-5 bg-[#FFD1AC] w-full relative flex flex-col gap-7">
            <div className="w-5 h-5 absolute -top-1 -left-2 bg-orange-500" />
            <div className="w-5 h-5 absolute -top-1 -right-2 bg-orange-500" />
            <div className="w-5 h-5 absolute -bottom-1 -right-2 bg-orange-500" />
            <div className="w-5 h-5 absolute -bottom-1 -left-2 bg-orange-500" />

            <h1 className="flex gap-3 items-center font-bold text-xl">
              <svg
                width="49"
                height="48"
                viewBox="0 0 49 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.5938 44C19.9604 42.8333 16.1351 40.1747 13.1178 36.024C10.1004 31.8733 8.59242 27.2653 8.59375 22.2V10L24.5938 4L40.5938 10V22.2C40.5938 27.2667 39.0851 31.8753 36.0677 36.026C33.0504 40.1767 29.2257 42.8347 24.5938 44ZM24.5938 39.8C27.8271 38.8 30.5271 36.8247 32.6937 33.874C34.8604 30.9233 36.1271 27.632 36.4938 24H24.5938V8.25L12.5938 12.75V23.1C12.5938 23.3333 12.6271 23.6333 12.6938 24H24.5938V39.8Z"
                  fill="#3076DE"
                />
              </svg>
              Infra & Security
            </h1>
            <div className="flex-col justify-start items-start gap-[31px] inline-flex">
              <div className="text-black text-base font-normal leading-snug tracking-tight">
                🤖 Security with 2FA (two factor auth using google auth on your
                phone)
              </div>
              <div className="text-black text-base font-normal leading-snug tracking-tight">
                🤖 Auto detection of Chain, Dex & Pairs
              </div>
              <div className="text-black text-base font-normal leading-snug tracking-tight">
                🤖 Copy trading with private transaction detection
              </div>
              <div className="text-black text-base font-normal leading-snug tracking-tight">
                🤖 Alpha Channel & Alpha Bot with fast snipe shortcut
              </div>
              <div className="text-black text-base font-normal leading-snug tracking-tight">
                🤖 BloxRoute integration
              </div>
            </div>
          </article>
          <article className="p-5 bg-[#FFD1AC] w-full relative flex flex-col gap-7">
            <div className="w-5 h-5 absolute -top-1 -left-2 bg-orange-500" />
            <div className="w-5 h-5 absolute -top-1 -right-2 bg-orange-500" />
            <div className="w-5 h-5 absolute -bottom-1 -right-2 bg-orange-500" />
            <div className="w-5 h-5 absolute -bottom-1 -left-2 bg-orange-500" />

            <h1 className="flex gap-3 items-center font-bold text-xl">
              <svg
                width="49"
                height="48"
                viewBox="0 0 49 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.0032 2.0175C26.3369 1.28625 26.9594 1.08 27.4769 1.0575C28.2644 1.02 29.0894 1.56375 29.8657 2.205C30.4169 2.8275 31.0769 3.3075 31.8419 3.645C32.3707 3.8325 32.8957 3.87 33.4282 3.84375C34.1782 3.80625 34.9394 3.64125 35.6932 3.60375L35.7344 3.6L36.0757 3.57C36.9382 3.52875 37.7519 3.73125 38.5244 4.1775C39.2332 4.8225 39.5444 5.625 39.4469 6.5925C39.2819 7.39125 39.4244 8.1225 39.8707 8.78625C40.6394 9.32625 41.4457 9.79875 42.2932 10.2C43.1707 10.68 43.7219 11.4037 43.9619 12.3675C44.0482 13.3875 43.5757 14.04 42.5557 14.3212C41.2282 14.655 39.4432 14.655 37.9394 15.8175C35.7419 17.6512 35.0519 19.5 34.0957 19.7812C33.6269 19.2487 30.7019 16.9875 25.7969 15.9037C24.9194 12.8775 24.3869 5.5725 26.0032 2.0175Z"
                  fill="#FCC21B"
                />
                <path
                  d="M30.9531 15.2586C31.8156 13.5336 34.2719 10.4998 34.8606 11.0998C35.4419 11.7523 34.1031 15.1423 33.1619 16.8036C32.8281 16.4511 31.7519 15.7123 31.2831 15.5886"
                  fill="#D19B15"
                />
                <path
                  d="M35.2971 20.7825C34.7908 20.7825 34.2958 20.5237 34.0146 20.0587C31.4346 15.8137 25.5921 16.26 25.5358 16.2675C24.7108 16.335 23.9833 15.7275 23.9121 14.9062C23.8772 14.5112 24 14.1184 24.2536 13.8135C24.5072 13.5086 24.871 13.3164 25.2658 13.2787C25.5808 13.2487 33.0171 12.6375 36.5796 18.5062C37.0108 19.215 36.7821 20.1375 36.0771 20.565C35.8296 20.7112 35.5633 20.7825 35.2971 20.7825Z"
                  fill="#8D6E63"
                />
                <path
                  d="M36.3667 45.7763C29.943 47.3588 21.0142 47.2463 14.6355 45.9863C8.66546 44.805 4.09421 41.2838 4.61921 34.3538C5.15171 27.3413 9.79796 20.7375 16.188 17.8275C22.3717 15.0113 30.6705 13.6388 35.043 20.0288C36.1305 21.6188 38.208 25.1475 38.3055 26.88C38.313 27.0188 38.3205 27.1425 38.3505 27.2625C38.358 27.6975 38.5342 28.1363 38.9617 28.4588C41.7105 30.54 43.713 33.3 44.0805 37.0838C44.5155 41.595 40.248 44.82 36.3667 45.7763Z"
                  fill="#FCC21B"
                />
                <path
                  d="M30.6734 34.1737C29.8934 32.9062 28.4572 31.53 27.0997 30.3487L28.1534 27.4312C29.0909 28.1625 29.9159 28.8487 30.5609 29.4412C30.6659 29.5425 30.8309 29.55 30.9509 29.4637L33.3659 27.6675C33.4334 27.615 33.4747 27.54 33.4859 27.4537C33.4899 27.4116 33.485 27.3691 33.4714 27.3291C33.4579 27.289 33.436 27.2522 33.4072 27.2212C32.6909 26.4225 31.1384 25.0237 29.4397 23.8725L30.0584 22.1625C30.1297 21.9675 30.0322 21.7537 29.8334 21.6787L26.9947 20.6512C26.7997 20.58 26.5822 20.6812 26.5109 20.8762L26.0497 22.155C23.3759 21.3262 21.2534 21.5925 19.5884 22.9837C18.2834 24.0787 17.7209 25.6425 18.1184 27.06C18.5234 28.5712 19.7084 29.6062 21.2084 30.915L21.3997 31.0837C21.7484 31.3837 22.1197 31.695 22.4834 32.0062L21.2009 35.5537C19.5172 34.4512 18.1072 32.925 17.8672 32.5912C17.8222 32.5292 17.7554 32.4866 17.6802 32.472C17.605 32.4574 17.5271 32.4719 17.4622 32.5125L14.6797 34.29C14.6122 34.3312 14.5634 34.4025 14.5447 34.485C14.5297 34.5637 14.5447 34.6462 14.5897 34.7137C15.4259 35.9737 16.7947 37.3837 18.2534 38.4862C18.6022 38.7487 19.1272 39.1162 19.7722 39.5025L19.2884 40.8337C19.2209 41.0287 19.3184 41.2425 19.5134 41.3137L22.3559 42.345C22.5509 42.4162 22.7684 42.315 22.8397 42.12L23.2409 41.01C25.8359 41.715 28.1159 41.3062 29.8784 39.7987C31.5809 38.34 31.8734 36.2925 30.6734 34.1737ZM24.7897 25.65L24.0134 27.7987C23.2897 27.2362 22.9034 26.8125 23.1772 26.205C23.4622 25.5825 24.1709 25.5412 24.7897 25.65ZM25.5584 34.6125C26.0572 35.0962 26.4097 35.5425 26.4434 35.9512C26.4584 36.1837 26.3722 36.4087 26.1697 36.6412C25.8172 37.05 25.2547 37.1287 24.6734 37.0575L25.5584 34.6125Z"
                  fill="#424242"
                />
              </svg>
              Trading & Snipping
            </h1>
            <div className="flex-col justify-start items-start gap-[31px] inline-flex">
              <div className="text-black text-base font-normal leading-snug tracking-tight">
                🤖 Grid trading (5 tokens at same time)
              </div>
              <div className="text-black text-base font-normal leading-snug tracking-tight">
                🤖 ETH: UniSwap V3
              </div>
              <div className="text-black text-base font-normal leading-snug tracking-tight">
                🤖 ARBITRUM:  UniSwap V3, Camelot
              </div>
              <div className="text-black text-base font-normal leading-snug tracking-tight">
                🤖 BASE :  CBSWAP
              </div>
              <div className="text-black text-base font-normal leading-snug tracking-tight">
                🤖 Buy/Sell orders by price & Mcap
              </div>
              <div className="text-black text-base font-normal leading-snug tracking-tight">
                🤖 Snipe in presale
              </div>
            </div>
          </article>
          <article className="p-5 bg-[#FFD1AC] w-full relative flex flex-col gap-7">
            <div className="w-5 h-5 absolute -top-1 -left-2 bg-orange-500" />
            <div className="w-5 h-5 absolute -top-1 -right-2 bg-orange-500" />
            <div className="w-5 h-5 absolute -bottom-1 -right-2 bg-orange-500" />
            <div className="w-5 h-5 absolute -bottom-1 -left-2 bg-orange-500" />

            <h1 className="flex gap-3 items-center font-bold text-xl">
              <svg
                width="49"
                height="48"
                viewBox="0 0 49 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33.0325 28C33.1925 26.68 33.3125 25.36 33.3125 24C33.3125 22.64 33.1925 21.32 33.0325 20H39.7925C40.1125 21.28 40.3125 22.62 40.3125 24C40.3125 25.38 40.1125 26.72 39.7925 28M29.4925 39.12C30.6925 36.9 31.6125 34.5 32.2525 32H38.1525C36.2148 35.3366 33.1407 37.864 29.4925 39.12ZM28.9925 28H19.6325C19.4325 26.68 19.3125 25.36 19.3125 24C19.3125 22.64 19.4325 21.3 19.6325 20H28.9925C29.1725 21.3 29.3125 22.64 29.3125 24C29.3125 25.36 29.1725 26.68 28.9925 28ZM24.3125 39.92C22.6525 37.52 21.3125 34.86 20.4925 32H28.1325C27.3125 34.86 25.9725 37.52 24.3125 39.92ZM16.3125 16H10.4725C12.3902 12.6544 15.4621 10.123 19.1125 8.88C17.9125 11.1 17.0125 13.5 16.3125 16ZM10.4725 32H16.3125C17.0125 34.5 17.9125 36.9 19.1125 39.12C15.4697 37.8633 12.4022 35.3354 10.4725 32ZM8.8325 28C8.5125 26.72 8.3125 25.38 8.3125 24C8.3125 22.62 8.5125 21.28 8.8325 20H15.5925C15.4325 21.32 15.3125 22.64 15.3125 24C15.3125 25.36 15.4325 26.68 15.5925 28M24.3125 8.06C25.9725 10.46 27.3125 13.14 28.1325 16H20.4925C21.3125 13.14 22.6525 10.46 24.3125 8.06ZM38.1525 16H32.2525C31.6265 13.5229 30.6996 11.1318 29.4925 8.88C33.1725 10.14 36.2325 12.68 38.1525 16ZM24.3125 4C13.2525 4 4.3125 13 4.3125 24C4.3125 29.3043 6.41964 34.3914 10.1704 38.1421C12.0275 39.9993 14.2323 41.4725 16.6588 42.4776C19.0853 43.4827 21.6861 44 24.3125 44C29.6168 44 34.7039 41.8929 38.4546 38.1421C42.2054 34.3914 44.3125 29.3043 44.3125 24C44.3125 21.3736 43.7952 18.7728 42.7901 16.3463C41.785 13.9198 40.3118 11.715 38.4546 9.85786C36.5975 8.00069 34.3927 6.5275 31.9662 5.52241C29.5397 4.51732 26.9389 4 24.3125 4Z"
                  fill="#FF002E"
                />
              </svg>
              Protocols & Others
            </h1>
            <div className="flex-col justify-start items-start gap-[31px] inline-flex">
              <div className="text-black text-base font-normal leading-snug tracking-tight">
                🤖 Extra 5 more wallets
              </div>
              <div className="text-black text-base font-normal leading-snug tracking-tight">
                🤖 Web interface that will communicate with the Telegram bot
              </div>
              <div className="text-black text-base font-normal leading-snug tracking-tight">
                🤖 Alpha Channel & Alpha Bot with fast snipe shortcut
              </div>
              <div className="text-black text-base font-normal leading-snug tracking-tight">
                🤖 BASE :  CBSWAP
              </div>
              <div className="text-black text-base font-normal leading-snug tracking-tight">
                🤖 Referral bot
              </div>
              <div className="text-black text-base font-normal leading-snug tracking-tight">
                🤖 Dedicated phone app (Android & IOS)
              </div>
            </div>
          </article>
        </div>
      </div>
      <img
        src={heroShape}
        alt=""
        className=" bottom-0 mt-36 w-full pointer-events-none"
      />
    </section>
  );
};

export default Features;
