import { useState } from "react";
import { GoMortarBoard } from "react-icons/go";
import { PiMedalThin } from "react-icons/pi";


const MyEducation = () => {
  return (
    <>
      <div className="lg:h-screen w-screen px-6 py-6 lg:flex justify-around">
        <div>
            <div className="flex justify-center gap-x-5"> 
                <div className="self-center"> <PiMedalThin className="self-center text-[2.5rem] lg:text-[3rem] font-normal self-center text-indigo-600 "/></div>
                <div className="self-center bg-gradient-to-r from-indigo-500 via-indigo-300 to-indigo-100 text-transparent inline-block bg-clip-text text-[2rem] lg:text-[2.5rem] font-bold"> My Experience</div>
            </div> 

            <div className="flex flex-col gap-y-6 p-4">
                <div className="border-0 rounded-xl bg-[#271639] shadow shadow-md lg:min-w-[33rem] lg:max-w-[33rem] p-4 hover:bg-gradient-to-r from-[#271639] via-[#583683] to-[#8a55cd]">
                    <div className="text-[#8750f7] text-[1.3rem] font-semibold">2023 - Present</div> 
                    <div className="text-[1.5rem] font-semibold text-gray-100">NODE.JS DEVELOPER </div> 
                    <div className="text-[1.3rem] font-normal text-gray-100">Agrovikas Agritech PVT LTD</div> 
                </div>

                <div className="border-0 rounded-xl bg-[#271639] shadow shadow-md lg:min-w-[33rem] lg:max-w-[33rem] p-4 hover:bg-gradient-to-r from-[#271639] via-[#583683] to-[#8a55cd] ">
                    <div className="text-[#8750f7] text-[1.3rem] font-semibold">2022 - 2023</div> 
                    <div className="text-[1.5rem] font-semibold text-gray-100">PYTHON DEVELOPER </div> 
                    <div className="text-[1.3rem] font-normal text-gray-100">VVDN Technologies</div> 
                </div>
            </div>
        </div>

        <div>
            <div className="flex justify-center gap-x-5"> 
                <div className="self-center"> <GoMortarBoard className="self-center text-[3rem] font-normal self-center text-indigo-600 "/></div>
                <div className="self-center bg-gradient-to-r from-indigo-500 via-indigo-300 to-indigo-100 text-transparent inline-block bg-clip-text text-[2rem] lg:text-[2.5rem] font-bold"> My Education</div>
            </div>

            <div className="flex flex-col gap-y-6 p-4">
                <div className="border-0 rounded-xl bg-[#271639] shadow shadow-md  p-4 hover:bg-gradient-to-r from-[#271639] via-[#583683] to-[#8a55cd]">
                    <div className="text-[#8750f7] text-[1.3rem] font-semibold">2018 - 2022</div> 
                    <div className="text-[1.5rem] font-semibold text-gray-100"> B.Tech (Bachelor of Technology) </div> 
                    <div className="text-[1.3rem] font-normal text-gray-100"> Shri Vaishnav Institute of Technology and Science </div> 
                </div>

                <div className="border-0 rounded-xl bg-[#271639] shadow shadow-md  p-4 hover:bg-gradient-to-r from-[#271639] via-[#583683] to-[#8a55cd] ">
                    <div className="text-[#8750f7] text-[1.3rem] font-semibold">2017 - 2018</div> 
                    <div className="text-[1.5rem] font-semibold text-gray-100"> HSC (Higher Secondary School Certificate) </div> 
                    <div className="text-[1.3rem] font-normal text-gray-100">Mount Carmel  school</div> 
                </div>

                <div className="border-0 rounded-xl bg-[#271639] shadow shadow-md  p-4 hover:text-gray-100 hover:bg-gradient-to-r from-[#271639] via-[#583683] to-[#8a55cd] ">
                    <div className="text-[#8750f7] text-[1.3rem] font-semibold">2015 - 2016</div> 
                    <div className="text-[1.5rem] font-semibold text-gray-100"> SSC (Secondary School Certificate) </div> 
                    <div className="text-[1.3rem] font-normal text-gray-100">Mount Carmel high school</div> 
                </div>
            </div> 
        </div>
      </div>
    </>
  );
}

export default MyEducation;