import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import {addNowPlayingMovies, addTopRated,} from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies.addNowPlayingMovies
  );

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();

    // console.log("hello", json.results);
    dispatch(addNowPlayingMovies(json.results));
  };

  const topRated = useSelector((store) => store.movies.addTopRated);
  const getTopRated = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?la nguage=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    // console.log("hello", json.results);
    dispatch(addTopRated(json.results));
  };

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
    !topRated && getTopRated();
  }, []);
};

export default useNowPlayingMovies;
