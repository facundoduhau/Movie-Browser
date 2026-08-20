export type Movie = {
  title: string;
  id: number;
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
