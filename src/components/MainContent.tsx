import HeroText from "./HeroText";
import Searchbar from "./Searchbar";
import type { MainContentProps } from "../utils/types";
import MovieCard from "./MovieCard";

const MainContent = ({
  movieList,
  isLoading,
  errorMessage,
}: MainContentProps) => {
  return (
    <main className="text-white w-full flex flex-col">
      <HeroText />
      <Searchbar />
      <MovieCard
        movieList={movieList}
        isLoading={isLoading}
        errorMessage={errorMessage}
      />
    </main>
  );
};

export default MainContent;
