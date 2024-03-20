import React, { useEffect, useState } from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import InfiniteScroll from "./InfiniteScroll";
import { API_OPTIONS } from "../../utils/constants";

const SecondaryContainer = () => {
  const [page, setPage] = useState(3);
  const [loading, setLoading] = useState(false);
  const [infiniteData, setInfiniteData] = useState([]);
  console.log(infiniteData);

  const handleInfiniteScroll = async () => {
    try {
      setLoading(true);
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 1);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, [page]);

  const getInfiniteScroll = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?page=${page}`,
      API_OPTIONS
    );
    const json = await data.json();
    setInfiniteData((prev) => [...prev, ...json.results]);
  };
  useEffect(() => {
    getInfiniteScroll();
  }, [page]);

  const movies = useSelector((state) => state.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="overflow-hidden  ">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Trending"} movies={movies.topRated} />
        <InfiniteScroll title={"All Movies"} movies={infiniteData} />
      </div>
    )
  );
};

export default SecondaryContainer;
