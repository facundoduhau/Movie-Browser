import { Loader2 } from "lucide-react";
import type { MovieListProps } from "../utils/types";

const MovieList = ({ movieList, isLoading, errorMessage }: MovieListProps) => {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-8">
        <Loader2 className="animate-spin" />
      </div>
    );
  }

  if (errorMessage) {
    return <p>{errorMessage}</p>;
  }

  if (movieList.length === 0) {
    return <p>No movies found.</p>;
  }

  return (
    <div>
      <p className="text-2xl font-bold ml-20 mt-5">Movies:</p>
      <div className="ml-20 mr-5 mt-5 ">
        <div className="grid gap-4 grid-cols-4">
          {movieList.map((movie) => (
            <p key={movie.id} data-id={movie.id}>
              {movie.title}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
