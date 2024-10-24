import { useState } from "react";
import PropTypes from "prop-types";
import '../styles/searchbar.css';


const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (city.trim() !== "") {
      onSearch(city);
    }
  };
  

  return (
    <div className="searchBar container my-4">
      <form onSubmit={handleSubmit}>
        <div className="input-group ">
          <input
            type="text"
            className="form-control"
            placeholder="Enter city name..."
            value={city}
            onChange={handleInputChange}
          />
          <button className="btn btn-primary searchButton" type="submit" >
            Search
          </button> 
        </div>
      </form>
    </div>
  );
};
SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
