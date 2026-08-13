import { useState } from "react";
import HeroText from "./HeroText";
import MovieContent from "./MovieContent";
import Searchbar from "./Searchbar";

const MainContent = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <main className="text-white w-full flex flex-col">
      <HeroText />
      <Searchbar searchTerm={searchTerm} onSearchTermChange={setSearchTerm} />
      <MovieContent />
    </main>
  );
};

export default MainContent;
