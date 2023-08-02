import React from "react";

const Details = () => {
  return (
    <section className="py-14 w-full relative bg-[#FF8226] text-white">
      <div className="container flex flex-col items-center justify-center gap-8">
        <h1 className="text-center text-white text-3xl md:text-5xl font-bold ">
          Excel in trading, sniping, copy trading, and other
          <br />
          DeFi activities directly through your apps.
        </h1>
        <p className="text-center text-white text-xl font-normal leading-7 tracking-tight">
          Wagiebot lives on its own private nodes on multiple networks, ensuring
          a rapid 1ms response time.
        </p>
        <div className=" justify-center items-center gap-[25px] grid grid-cols-1 lg:grid-cols-3">
          <div className=" self-stretch px-[25px] py-8 bg-white rounded-xl justify-center items-start gap-2.5 flex">
            <div className="flex-col justify-start items-start gap-6 inline-flex">
              <div className="text-orange-500 text-[32px] font-bold">
                Buy & Sell
              </div>
              <div className="flex-col justify-start items-start gap-6 flex">
                <div className="justify-start items-center gap-3 inline-flex">
                  <div className="text-black text-2xl font-normal leading-[33.60px] tracking-wide">
                    🤖{" "}
                  </div>
                  <div className="text-black text-base font-normal">
                    Max buy 2%
                  </div>
                </div>
                <div className="justify-start items-center gap-3 inline-flex">
                  <div className="text-black text-2xl font-normal leading-[33.60px] tracking-wide">
                    🤖{" "}
                  </div>
                  <div className="text-black text-base font-normal">
                    Max wallet 2%
                  </div>
                </div>
                <div className="justify-start items-center gap-3 inline-flex">
                  <div className="text-black text-2xl font-normal leading-[33.60px] tracking-wide">
                    🤖{" "}
                  </div>
                  <div className="text-black text-base font-normal">
                    Price on listing: 0.000000022 <br />
                    ETH / 1 UB
                  </div>
                </div>
                <div className="justify-start items-center gap-3 inline-flex">
                  <div className="text-black text-2xl font-normal leading-[33.60px] tracking-wide">
                    🤖{" "}
                  </div>
                  <div className="text-black text-base font-normal leading-normal">
                    4% marketing (we will have a public <br />
                    sheet in google drive with every <br />
                    expenses for marketing)
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch px-6 py-8 bg-white rounded-xl justify-start items-start gap-2.5 flex">
            <div className="flex-col justify-start items-start gap-6 inline-flex">
              <div className="text-orange-500 text-[32px] font-bold">Taxes</div>
              <div className="flex-col justify-start items-start gap-6 flex">
                <div className="justify-start items-center gap-3 inline-flex">
                  <div className="text-black text-2xl font-normal leading-[33.60px] tracking-wide">
                    🤖{" "}
                  </div>
                  <div className="text-black text-base font-normal">
                    Tax for the first 10 minutes: 25% <br />
                    buy/sell
                  </div>
                </div>
                <div className="justify-start items-center gap-3 inline-flex">
                  <div className="text-black text-2xl font-normal leading-[33.60px] tracking-wide">
                    🤖{" "}
                  </div>
                  <div className="text-black text-base font-normal">
                    Tax for the first 5 minutes: 20% <br />
                    buy/sell
                  </div>
                </div>
                <div className="justify-start items-center gap-3 inline-flex">
                  <div className="text-black text-2xl font-normal leading-[33.60px] tracking-wide">
                    🤖{" "}
                  </div>
                  <div className="text-black text-base font-normal">
                    Tax for the first 5 minutes: 15% <br />
                    buy/sell
                  </div>
                </div>
                <div className="justify-start items-center gap-3 inline-flex">
                  <div className="text-black text-2xl font-normal leading-[33.60px] tracking-wide">
                    🤖{" "}
                  </div>
                  <div className="text-black text-base font-normal">
                    Tax for the first 5 minutes: 10% <br />
                    buy/sell
                  </div>
                </div>
                <div className="justify-start items-center gap-3 inline-flex">
                  <div className="text-black text-2xl font-normal leading-[33.60px] tracking-wide">
                    🤖{" "}
                  </div>
                  <div className="text-black text-base font-normal">
                    Final Tax: 5-% buy/sell
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" px-6 py-8 bg-white rounded-xl justify-start items-end gap-2.5 flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
              <div className="text-orange-500 text-[32px] font-bold">
                Supply
              </div>
              <div className="self-stretch flex-col justify-start items-start gap-5 flex">
                <div className="justify-start items-center gap-3 inline-flex">
                  <div className="text-black text-2xl font-normal leading-[33.60px] tracking-wide">
                    🤖{" "}
                  </div>
                  <div className="text-black text-base font-normal leading-normal">
                    Total supply: 100 mil
                  </div>
                </div>
                <div className="justify-start items-center gap-3 inline-flex">
                  <div className="text-black text-2xl font-normal leading-[33.60px] tracking-wide">
                    🤖{" "}
                  </div>
                  <div className="text-black text-base font-normal leading-normal">
                    Circulating supply: 90% (90mil)
                  </div>
                </div>
                <div className="justify-start items-center gap-3 inline-flex">
                  <div className="text-black text-2xl font-normal leading-[33.60px] tracking-wide">
                    🤖{" "}
                  </div>
                  <div className="text-black text-base font-normal leading-normal">
                    Liq ETH : 2 eth locked after launch <br />
                    90 days (at higher mcaps lock will <br />
                    be extended)
                  </div>
                </div>
                <div className="justify-start items-center gap-3 inline-flex">
                  <div className="text-black text-2xl font-normal leading-[33.60px] tracking-wide">
                    🤖{" "}
                  </div>
                  <div className="text-black text-base font-normal leading-normal">
                    Access DAO, Reward, Reduced <br />
                    bot fee: 1% UB (9000 UB)
                  </div>
                </div>
                <div className="justify-start items-center gap-3 inline-flex">
                  <div className="text-black text-2xl font-normal leading-[33.60px] tracking-wide">
                    🤖{" "}
                  </div>
                  <div className="text-black text-base font-normal leading-normal">
                    Reserve distribution(10%):
                  </div>
                </div>
                <div className="self-stretch justify-start items-center gap-3 inline-flex">
                  <div className="text-black text-2xl font-normal leading-[33.60px] tracking-wide">
                    🤖{" "}
                  </div>
                  <div className="grow shrink basis-0 text-black text-base font-normal leading-normal">
                    6% team 2% x 3 dev's (locked 30 days before launch)
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

export default Details;
