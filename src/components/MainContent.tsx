import HeroText from "./HeroText";
import Searchbar from "./Searchbar";
import type { MainContentProps } from "../utils/types";
import MovieList from "./MovieList";

const MainContent = ({
  movieList,
  isLoading,
  errorMessage,
}: MainContentProps) => {
  return (
    <main className="text-white w-full flex flex-col">
      <HeroText />
      <Searchbar />
      <MovieList
        movieList={movieList}
        isLoading={isLoading}
        errorMessage={errorMessage}
      />
    </main>
  );
};

export default MainContent;
