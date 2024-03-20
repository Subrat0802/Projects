import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieDetails = ({ id, toggleShowCast }) => {
  const [data, setData] = useState(null);
  const [castData, setCastData] = useState(null); // Initialize castData state

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
          API_OPTIONS
        );
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setData(null);
      }
    };

    const getCastData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
          API_OPTIONS
        );
        const json = await response.json();
        setCastData(json.cast); // Set castData state
      } catch (error) {
        console.error("Error fetching cast data:", error);
        setCastData([]); // Set castData to an empty array in case of error
      }
    };

    getData();
    if (toggleShowCast) {
      getCastData();
    }
  }, [id, toggleShowCast]);

  return { data, castData }; // Return both data and castData
};

export default useMovieDetails;
