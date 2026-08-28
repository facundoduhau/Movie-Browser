export type Movie = {
  title: string;
  id: number;
  poster_path: string
  vote_average: number
  release_date: string
};

export type MainContentProps = {
  movieList: Movie[];
  isLoading: boolean;
  errorMessage: string;
};

export type MovieListProps = {
  movieList: Movie[];
  isLoading: boolean;
  errorMessage: string;
};
