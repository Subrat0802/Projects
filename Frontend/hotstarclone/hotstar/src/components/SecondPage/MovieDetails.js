import React, { useState } from "react";
import { useParams } from "react-router";
import { IMAGE_CDN_CAST, IMAGE_CDN_ORIGINAL, IMAGE_CDN_POSTER } from "../../utils/constants";
import Loading from "./Loading";
import useMovieDetails from "../../hooks/useMovieDetails";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";

const MovieDetails = () => {
  const { id } = useParams();
  const [toggleShowCast, setToggleShowCast] = useState(false);
  const { data, castData } = useMovieDetails({ id, toggleShowCast });

  // If data is still loading, show loading component
  if (!data) {
    return (
      <div className="w-full h-[100vh] flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  // Once data is loaded, render movie details
  return (
    <div className="mt-36 flex flex-col justify-center items-center">
        <Link to={"/moviePage"}><p className="text-blue-500">Back</p></Link>
      <div className="w-[80%] border flex ">
        <img className="w-[50%]" src={IMAGE_CDN_ORIGINAL + data.backdrop_path} alt={data.title} />{" "}
        {/* Add alt attribute for accessibility */}
        <div className="w-[50%] flex flex-col justify-center items-center px-12 gap-2">
          <p className="text-2xl font-bold">{data.title}</p>
          <p className="text-gray-700">{data.overview}</p>
          <p className="flex items-center justify-center">Rating: {data.vote_average.toFixed(1)}{"/10"} <FaStar className="text-yellow-500" /></p>
          <div className="flex">
            {data.spoken_languages.map((el, index) => (
              <p key={index}>{el.english_name}{", "}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10">
        <button
          onClick={() => setToggleShowCast(!toggleShowCast)}
          className="px-4 py-2 border border-blue-500 text-blue-500 hover:text-black hover:border-black transition-all duration-200"
        >
          {toggleShowCast ? "Hide cast" : "Show cast"} {">"}
        </button>
      </div>
      {toggleShowCast &&
        (castData ? (
          <div className="w-[80%] flex flex-wrap justify-center items-center border gap-8 mt-10 transition-all duration-300 pb-40 pt-11">
            {castData.map((el) => (
              <div key={el.id} className="w-32 h-32 mb-14 flex flex-col justify-center items-center ">
                <img loading="lazy" className="w-32 h-32 rounded-full object-cover" alt={el.name} src={IMAGE_CDN_CAST + el.profile_path}  />
                <p className="text-sm ">{el.name}</p>
                <p className="text-sm text-red-800">{el.character}</p>
                
              </div>
            ))}
          </div>
        ) : (
          <Loading />
        ))}
    </div>
  );
};

export default MovieDetails;
