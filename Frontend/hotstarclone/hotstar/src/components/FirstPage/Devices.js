import React from "react";
import { CONNECTRANDS, DEVICEIMG } from "../../utils/images";
import Marquee from "react-fast-marquee";

const Devices = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center pt-96 pb-12">
      <img src="https://www.apple.com/v/apple-tv-plus/ah/images/overview/hero_icon__gpaz9xyhw0uq_large_2x.png" />
      <p className="font-bold text-6xl text-center text-[#1D1D1F] mt-2">
        Watch Apple TV+ anywhere <br /> on the Apple TV app.
      </p>
      <p className=" text-center text-[#1D1D1F] mt-6">
        Find the Apple TV app on your favorite Apple devices.
        <br /> Or watch Apple TV+ online at{" "}
        <span className="text-blue-500 hover:underline cursor-pointer">
          tv.apple.com.
        </span>
      </p>

      <div className="text-black flex justify-center items-center gap-44 mt-20">
        {DEVICEIMG.map((el, index) => (
          <div key={index} className="flex justify-center items-center flex-col">
            <img className="w-12 " loading="lazy" src={el.image} />
            <p className="font-bold text-[#1D1D1F]">{el.name}</p>
          </div>
        ))}
      </div>
      <div>
      <p className="text-4xl mt-12 font-semibold text-[#1D1D1F] text-center">See it on your smart TV<br/> or streaming device.</p>
      <p className="text-center text-blue-500 mt-3">Setup your device{">"}</p>
      </div>
      <Marquee autoFill pauseOnHover direction="left" speed={40}>
      <div className="flex gap-20 mt-5">
        {
            CONNECTRANDS.map((el, index) => {
                return <img className="w-20" key={index} src={el}/>
            })
        }
      </div>
      </Marquee>
    </div>
  );
};

export default Devices;
