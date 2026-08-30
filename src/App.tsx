import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import {
  API_OPTIONS,
  ENDPOINT_SEARCH_MOVIES,
  ENDPOINT_SORT_BY_POPULARITY,
} from "./utils/constants";
import type { Movie, MovieApiResponse } from "./utils/types";

const App = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const [searchInput, setSearchInput] = useState("");
  const [activeQuery, setActiveQuery] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      setErrorMessage("");
      try {
        const endpoint = activeQuery
          ? ENDPOINT_SEARCH_MOVIES(activeQuery)
          : ENDPOINT_SORT_BY_POPULARITY;
        const response = await fetch(endpoint, API_OPTIONS);
        if (!response.ok) {
          throw new Error("Failed to fetch movies, response failed");
        }
        const data: MovieApiResponse = await response.json();
        setMovieList(data.results || []);
      } catch (error) {
        console.error(`Error fetching movie: ${error}`);
        setErrorMessage(`There was an unexpected error: ${error}`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [activeQuery]);

  return (
    <div className="w-screen min-h-screen h-full bg-linear-to-bl from-slate-950  to-slate-900 flex flex-col items-center">
      <Header />
      <MainContent
        movieList={movieList}
        isLoading={isLoading}
        errorMessage={errorMessage}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        onSearch={setActiveQuery}
      />
      <Footer />
    </div>
  );
};

export default App;
