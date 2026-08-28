import { useState } from "react";

const Searchbar = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="flex flex-col font-poppins">
      <div className="flex flex-col justify-center items-center text-center">
        <input
          type="search"
          name="main-searchbar"
          id="main-searchbar"
          placeholder="Search through our catalog..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="bg-gray-200 text-black w-1/4 pl-6 pr-6 pt-3 pb-3 text-l rounded-2xl shadow-2xl"
        />
      </div>
    </div>
  );
};

export default Searchbar;
