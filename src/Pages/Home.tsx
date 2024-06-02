import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../Store/store";
import OwlCarouselCard from "../UI/OwlCarouselCard";
import { useAppDispatch, useAppSelector } from "../Store/hooks";
import { getTrendingMovies } from "../Services/moviesAPIs";
import { setTrending } from "../Store/Features/moviesSlice";
import MoviesList from "../UI/MoviesList";
import MovieCardLoader from "../UI/MovieCardLoader";

const options = {
  items: 1,
  nav: false,
  margin: 0,
  rewind: true,
  dots: true,
  autoplay: true,
  autoplayTimeout: 2500,
  autoplayHoverPause: true,
  center: true,
  mouseDrag: true,
};

const Home: React.FC = () => {
  const {
    nowPlayingMovies,
    // recentlyUpdatedMovies,
    trending,
    // newReleaseMovies,
    // newReleaseSeries,
    // topRatedMovies,
    // youMayLikeMovies,
    // detailedMovies,
  } = useAppSelector((state: RootState) => state.movies);
  const dispatch = useAppDispatch();

  //// I used useEffect to get movies after opening the home page with loader indicator
  //// before fetching data from API.

  useEffect(function () {
    async function fetchingData(): Promise<any> {
      //// Getting trending movies and showing them:
      const trending = await getTrendingMovies();
      if (trending.length) dispatch(setTrending(trending));
    }

    fetchingData();
  }, []);

  console.log("trending", trending);

  return (
    <div className="flex flex-col gap-2">
      {/* <OwlCarousel
        className="w-screen mx-0 mb-2 owl-theme h-fit sm:mb-3"
        {...options}
      >
        {nowPlayingMovies.map((movie) => (
          <div className="item" key={movie.id}>
            <OwlCarouselCard
              title={movie.title}
              description={movie.overview}
              rating={movie.vote_average}
              date={movie.release_date}
              imgURL={movie.backdrop_path}
            />
          </div>
        ))}
      </OwlCarousel> */}

      {/* //// Now playing //// */}

      {trending.length ? (
        <MoviesList title="Trending" movies={trending} />
      ) : (
        <MovieCardLoader />
      )}
    </div>
  );
};

export default Home;
