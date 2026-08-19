import { useState } from "react";

const Searchbar = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="text-2xl flex flex-col font-poppins">
      <div className="flex flex-col justify-center items-center text-center">
        <input
          type="search"
          name="main-searchbar"
          id="main-searchbar"
          placeholder="Search through our catalog..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="bg-gray-200 text-black w-1/5 pl-4 pr-4 pt-2 pb-2 text-sm rounded-2xl shadow-2xl"
        />
      </div>
    </div>
  );
};

export default Searchbar;
