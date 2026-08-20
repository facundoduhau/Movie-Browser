export type Movie = {
  title: string;
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
