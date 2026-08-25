import type { Movie } from "../utils/types";

const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <div>
      <p>{movie.title}</p>
    </div>
  );
};

export default MovieCard;
