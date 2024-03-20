import React, { useRef } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { IMAGE_CDN_POSTER } from "../../utils/constants";


const MovieList = ({ title, movies }) => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };
  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  // console.log(movies);
  return (
    <div className="flex flex-col text-xl mt-3 px-7 text-gray-300">
      <div className="flex justify-between items-center mb-2">
        <p className="">{title}</p>
        <div className="flex gap-3">
          <p
            className="bg-black rounded-full p-2 cursor-pointer"
            onClick={scrollLeft}
          >
            <FaAngleLeft />
          </p>
          <p
            className="bg-black rounded-full p-2 cursor-pointer"
            onClick={scrollRight}
          >
            <FaAngleRight />
          </p>
        </div>
      </div>
      <div
        className="flex overflow-x-hidden gap-2 w-full "
        ref={containerRef}
      >
        {movies?.map((poster, index) => {
          return (
            <img key={index} className="w-48"
              src={IMAGE_CDN_POSTER + poster.poster_path}
              alt="poster_image"
            />
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;
