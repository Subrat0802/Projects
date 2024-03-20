import React from 'react'
import { IoIosInformationCircle } from "react-icons/io";
import { FaGooglePlay } from "react-icons/fa";

const BackgroudVideo = () => {
  return (
    <div className="relative no-scroll  overflow-y-hidden" value={0}>
        <iframe
          className="w-full h-[100vh] scale-125 overflow-x-hidden"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/qiuSBWVdgLI?&autoplay=1&mute=1&showinfo=1&controls=0&autohide=1&autohide=1&amp&loop=1&playlist=qiuSBWVdgLI&loop"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <div className="absolute w-full h-[100vh] top-0 flex flex-col justify-center pl-20 ">
          <p className="lg:text-7xl text-[#D0D0D0] font-bold opacity-75">
            Oppenheimer
          </p>
          <div className="mt-7 flex gap-2">
            <button className="text-[#D0D0D0] bg-[#141414] rounded-md py-2 px-3 flex justify-center items-center gap-1">
              Info <IoIosInformationCircle />
            </button>
            <button className="text-[#D0D0D0] bg-[#141414] rounded-md py-2 px-3 flex justify-center items-center gap-1">
              Stream Now <FaGooglePlay />
            </button>
          </div>
        </div>
      </div>
  )
}

export default BackgroudVideo