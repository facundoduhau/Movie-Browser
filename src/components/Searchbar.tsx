import type { SearchBarProps } from "../utils/types";

const Searchbar = ({
  searchInput,
  setSearchInput,
  onSearch,
}: SearchBarProps) => {
  return (
    <div className="flex flex-col font-poppins mt-5">
      <div className="flex flex-col justify-center items-center text-center">
        <input
          type="search"
          name="main-searchbar"
          id="main-searchbar"
          placeholder="Search through our catalog..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSearch(searchInput);
            }
          }}
          className="bg-gray-200 text-black w-1/4 pl-6 pr-6 pt-3 pb-3 text-l rounded-2xl shadow-2xl"
        />
      </div>
    </div>
  );
};

export default Searchbar;
