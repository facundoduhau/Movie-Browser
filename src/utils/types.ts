export type Movie = {
  title: string;
  id: number;
  poster_path: string;
  vote_average: number;
  release_date: string;
};

export type MovieApiResponse = {
  results: Movie[];
};

export type MovieResultsState = {
  movieList: Movie[];
  isLoading: boolean;
  errorMessage: string;
};

export type SearchState = {
  searchInput: string;
  setSearchInput: (value: string) => void;
  onSearch: (value: string) => void;
};

export type MainContentProps = MovieResultsState & SearchState;

export type MovieListProps = MovieResultsState;

export type SearchBarProps = SearchState;

export type MovieCardProps = {
  movie: Movie;
};
