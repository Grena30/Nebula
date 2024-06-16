import SearchIcon from "@mui/icons-material/Search";
import "../css/Search.css";
import { useState } from "react";

const Search = ({ carsJson, cars, setCars }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (inputValue) => {
    const filteredCars = cars.filter((car) => {
      return (
        car.make.toLowerCase().includes(inputValue.toLowerCase()) ||
        car.model.toLowerCase().includes(inputValue.toLowerCase())
      );
    });

    if (inputValue === "") {
      setCars(carsJson);
    } else {
      setCars(filteredCars);
    }
  };

  return (
    <div className="container search-elem">
      <input
        className="search-input"
        type="text"
        placeholder="Search..."
        value={searchInput}
        onChange={(e) => {
          handleSearch(e.target.value);
          setSearchInput(e.target.value);
        }}
      />
      <button className="search-btn" onClick={handleSearch}>
        <SearchIcon />
      </button>
    </div>
  );
};

export default Search;
