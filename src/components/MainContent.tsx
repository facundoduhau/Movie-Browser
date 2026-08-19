import HeroText from "./HeroText";
import Searchbar from "./Searchbar";

const MainContent = () => {
  return (
    <main className="text-white w-full flex flex-col">
      <HeroText />
      <Searchbar />
    </main>
  );
};

export default MainContent;
