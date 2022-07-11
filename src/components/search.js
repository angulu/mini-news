import { useState } from "react";

const Search = ({handleUseSearchInput}) => {
  const [searchInput, setSearchInput] = useState("");
  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  }

  const handleClickSearch = () => {
    console.log("searchInput", searchInput);
    handleUseSearchInput(searchInput);
  }

  return (
    <div className="search-div">
        <input value={searchInput} placeholder="Search for news..." onChange={handleSearchInput} />
        <button onClick={handleClickSearch}>Search</button>
    </div>
  );
}

export default Search;
