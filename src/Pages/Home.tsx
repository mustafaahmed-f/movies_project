import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../Store/store";
import OwlCarouselCard from "../UI/OwlCarouselCard";

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
    // trending,
    // newReleaseMovies,
    // newReleaseSeries,
    // topRatedMovies,
    // youMayLikeMovies,
    // detailedMovies,
  } = useSelector((state: RootState) => state.movies);

  return (
    <>
      <OwlCarousel className="owl-theme h-fit mb-2 mx-0 sm:mb-3" {...options}>
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
      </OwlCarousel>
    </>
  );
};

export default Home;

export function loader() {
  return null;
}
