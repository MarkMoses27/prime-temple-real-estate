import React from 'react';
import './SearchBar.css'; // Import the CSS file for styling

const SearchBar = ({ onSearch }) => {
  const [searchCriteria, setSearchCriteria] = React.useState({
    location: '',
    propertyType: '',
    propertyStatus: '',
    priceLimit: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchCriteria((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchCriteria);
  };

  return (
    <div className="search-bar-container">
      <form className="search-bar" onSubmit={handleSearch}>
        <select
          name="location"
          value={searchCriteria.location}
          onChange={handleInputChange}
          className="search-input"
        >
          <option value="">Select City</option>
          <option value="nairobi">Nairobi</option>
          <option value="mombasa">Mombasa</option>
          <option value="kisumu">Kisumu</option>
          <option value="nakuru">Nakuru</option>
          <option value="eldoret">Eldoret</option>
        </select>

        <select
          name="propertyType"
          value={searchCriteria.propertyType}
          onChange={handleInputChange}
          className="search-input"
        >
          <option value="">Property Type</option>
          <option value="house">House</option>
          <option value="apartment">Apartment</option>
          <option value="villa">Villa</option>
        </select>

        <select
          name="propertyStatus"
          value={searchCriteria.propertyStatus}
          onChange={handleInputChange}
          className="search-input"
        >
          <option value="">Status</option>
          <option value="rent">For Rent</option>
          <option value="sale">For Sale</option>
        </select>

        <input
          type="number"
          name="priceLimit"
          placeholder="Max Price"
          value={searchCriteria.priceLimit}
          onChange={handleInputChange}
          className="search-input"
        />

        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;