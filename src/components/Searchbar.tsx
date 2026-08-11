type SearchbarProps = {
  searchTerm: string;
  onSearchTermChange: (newSearchTerm: string) => void;
};

const Searchbar = ({ searchTerm, onSearchTermChange }: SearchbarProps) => {
  return (
    <div className="text-2xl flex flex-col font-poppins">
      <div className="flex flex-col justify-center items-center text-center">
        <input
          type="search"
          name="main-searchbar"
          id="main-searchbar"
          placeholder="Search through our catalog..."
          value={searchTerm}
          onChange={(e) => onSearchTermChange(e.target.value)}
          className="bg-gray-200 text-black w-1/5 mt-4 pl-4 pr-4 pt-2 pb-2 text-sm rounded-2xl shadow-2xl"
        />
      </div>
      <div className="text-white">{searchTerm}</div>
    </div>
  );
};

export default Searchbar;
