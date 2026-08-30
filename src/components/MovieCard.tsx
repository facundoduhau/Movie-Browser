import type { MovieCardProps } from "../utils/types";

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div className="bg-slate-900 p-5 rounded-2xl flex flex-col border-slate-950 border shadow-2xl shadow-black/70">
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : "/no-movie.png"
        }
        alt={movie.title}
        title={movie.title}
        className="rounded-2xl"
      />
      <div className="flex flex-col font-bold text-lg text-white mt-5 font-poppins">
        <div className="flex justify-between">
          <div>{movie.title}</div>
          <div>
            ⭐ {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}
          </div>
        </div>
        <div>{movie.release_date.split("-")[0]}</div>
      </div>
    </div>
  );
};

export default MovieCard;
