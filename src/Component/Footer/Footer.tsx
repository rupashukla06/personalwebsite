import { useState } from "react";

const Footer = () => {
  return (
    <>
      <div className="w-screen px-6 py-6 ">
          <div>
            <div className="leading-10 lg:flex justify-around lg:px-[25rem]">
            <div className="flex justify-center text-gray-100 font-semibold lg:text-[1.2rem] cursor-pointer hover:text-[#8750f7]">  Home.</div>
              <div className="flex justify-center text-gray-100 font-semibold lg:text-[1.2rem] cursor-pointer hover:text-[#8750f7]">  Skill.</div>
              <div className="flex justify-center text-gray-100 font-semibold lg:text-[1.2rem] cursor-pointer hover:text-[#8750f7]">  About me.</div>
              <div className="flex justify-center text-gray-100 font-semibold lg:text-[1.2rem] cursor-pointer hover:text-[#8750f7]">  Resume.</div>
              <div className="flex justify-center text-gray-100 font-semibold lg:text-[1.2rem] cursor-pointer hover:text-[#8750f7]">  Testimonial.</div>
            </div>
            <div className="flex justify-center text-[#8750f7] py-5 lg:text-[1.2rem]"> © 2024 All Rights Reserved by Rupa Shukla</div>
          </div>
          
      </div>
    </>
  );
}

export default Footer;