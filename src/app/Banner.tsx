import Image from "next/image";
import React from "react";
import vec from "../../public/vec.png";
import star from "../../public/star.png";
import banner from "../../public/banner.png";
import down from "../../public/down.png";

const Banner = () => {
  return (
    <div className="banner pt-[130px] ">
      <div className="px-[300px] flex gap-[137px] items-center  mb-[50px]">
        <p className="flex gap-5  text-lg text-[#1A1A1A] font-medium items-center">
          Hey There! We are <Image src={vec} alt="" />
        </p>
        <Image src={star} alt="" />
      </div>
      <h1 className="px-[300px] text-[130px] font-medium mb-[-20px] relative z-[1000]  text-[#1A1A1A] leading-[140px]">
        <span className="fawking">CREATIVE</span> Digital Agency.
      </h1>
      <div className="ps-[70px]">
        <div className="flex gap-[88px] items-start">
          <Image src={banner} alt="" />
          <div>
            <p className="mb-10 text-[#545454] text-base max-w-[448px] w-full leading-[26px]">
              Halsome is a business that provides services related to online{" "}
              <span className="text-[#1A1A1A] font-medium ">
                marketing, web development, design
              </span>
              , and other digital solutions clients.
            </p>
            <div className="flex gap-[30px] mb-[122px]">
              <button className="bg-white border border-[#DFDFDF] flex items-center py-3 px-5 text-sm font-medium rounded-full">
                Success Rate
                <div className="h-[1px] w-[10px] bg-[#1A1A1A] opacity-[0.5] mx-[7px]"></div>
                90%
              </button>
              <button className="bg-white border border-[#DFDFDF] flex items-center py-3 px-5 gap-[5px] text-sm font-medium rounded-full">
                Spotlight
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                >
                  <mask
                    id="mask0_714_15808"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="9"
                    height="9"
                  >
                    <rect width="9" height="9" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_714_15808)">
                    <path
                      d="M8.596 5.19735L2.233 8.88935C1.693 9.20235 1 8.82335 1 8.19235V0.808348C1 0.178348 1.692 -0.201652 2.233 0.112348L8.596 3.80435C8.71884 3.87447 8.82094 3.97583 8.89196 4.09816C8.96299 4.22048 9.00039 4.3594 9.00039 4.50085C9.00039 4.64229 8.96299 4.78122 8.89196 4.90354C8.82094 5.02586 8.71884 5.12722 8.596 5.19735Z"
                      fill="#EC6219"
                    />
                  </g>
                </svg>
              </button>
            </div>
            <div className="flex gap-[128px] items-center ">
              <button className="size-40 bg-[#1A1A1A] gap-3 rounded-full flex justify-center items-center text-white flex-col">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
  <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" fill="white"/>
</svg>
                Explore <br /> Now
              </button>
              <Image src={down} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
