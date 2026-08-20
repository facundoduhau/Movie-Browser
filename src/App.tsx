import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import {
  API_OPTIONS,
  ENDPOINT_SORT_BY_POPULARITY,
} from "./constants/constants";
import type { Movie } from "./utils/types";

const App = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const [movieList, setMovieList] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMoviesByPopularity = async () => {
      setIsLoading(true);
      setErrorMessage("");
      try {
        const response = await fetch(ENDPOINT_SORT_BY_POPULARITY, API_OPTIONS);
        if (!response.ok) {
          throw new Error("Failed to fetch movies, response failed");
        } else {
          const data = await response.json();
          console.log(data);

          if (data.Response == false) {
            setErrorMessage(data.Error || "Failed to fetch movies");
            setMovieList([]);
            return;
          } else {
            setMovieList(data.Results || []);
          }
        }
      } catch (e) {
        console.log(`Error fetching movie: ${e}`);
        setErrorMessage(`There was an unexpected error: ${e}`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMoviesByPopularity();
  }, []);

  return (
    <div className="w-screen h-screen bg-linear-to-bl from-slate-950  to-slate-900 flex flex-col items-center">
      <Header />
      <MainContent
        movieList={movieList}
        isLoading={isLoading}
        errorMessage={errorMessage}
      />
      <Footer />
    </div>
  );
};

export default App;
