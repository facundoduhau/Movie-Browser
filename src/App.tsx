import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: "GET",
  header: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const App = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const fetchMoviesFromTMDB = async () => {
    try {
      console.log("Hello");
    } catch (e) {
      console.log(`Error fetching movie: ${e}`);
      setErrorMessage(
        "There was an unexpected error trying to fetch movies. Please try again later",
      );
    }
  };

  return (
    <div className="w-screen h-screen bg-linear-to-bl from-slate-950  to-slate-900 flex flex-col items-center">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
