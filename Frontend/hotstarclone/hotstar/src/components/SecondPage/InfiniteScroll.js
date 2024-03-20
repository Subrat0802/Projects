import React from "react";
import { IMAGE_CDN_POSTER } from "../../utils/constants";
import Loading from "./Loading";
import { Link } from "react-router-dom";

const InfiniteScroll = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="flex flex-col text-xl mt-3 px-7 w-full text-gray-300 no-scroll py-10">
      <div className="flex justify-between items-center mb-2">
        <p className="">{title}</p>
      </div>
      <div className="grid grid-cols-5 justify-between gap-10 overflow-x-hidden  w-full ">
        {!movies ? <Loading /> : movies?.map((poster, index) => {
          return (
            <Link key={index} to={"/movieDetails/" + poster.id}><div className="hover:opacity-75 relative group hover:bg-black transition-all duration-200 cursor-pointer">
              <img
                className=""
                src={IMAGE_CDN_POSTER + poster.poster_path}
                alt="poster_image"
              />
              <p className="bg-gradient-to-t from-black  w-full absolute invisible group-hover:visible  bottom-0 z-40 font-bold">{poster.original_title}</p>
            </div></Link>
          );
        })}
      </div>
    </div>
  );
};

export default InfiniteScroll;
