export interface movieCards {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface movieDetails {
  runtime: number;
  title: string;
  vote_average: number;
  release_date: string;
  overview: string;
  origin_country: string[];
  genres: { name: string }[];
  production_companies: { name: string }[];
}

export interface myState {
  nowPlayingMovies: movieCards[];

  trending: movieCards[];
  newReleaseMovies: movieCards[];
  newReleaseSeries: movieCards[];
  topRatedMovies: movieCards[];
  youMayLikeMovies: movieCards[];
  detailedMovies: movieDetails[];
}

export interface actionPayloadMovies {
  trending: movieCards[];
  newReleaseMovies: movieCards[];
  newReleaseSeries: movieCards[];
  topRatedMovies: movieCards[];
  youMayLikeMovies: movieCards[];
}
