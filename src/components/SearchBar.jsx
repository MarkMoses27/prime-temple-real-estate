import React, { useState } from 'react';
import './SearchBar.css';
import properties from '../data/properties';

const SearchBar = ({ onSearchResults }) => {
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [propertyStatus, setPropertyStatus] = useState('');
  const [priceLimit, setPriceLimit] = useState('');

  const handleSearch = () => {
    const filteredProperties = properties.filter(property => {
      return (
        (location === '' || property.location === location) &&
        (propertyType === '' || property.type === propertyType) &&
        (propertyStatus === '' || property.status === propertyStatus) &&
        (priceLimit === '' || property.price <= parseInt(priceLimit))
      );
    });

    onSearchResults(filteredProperties);
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <select value={location} onChange={(e) => setLocation(e.target.value)} className="search-input">
          <option value="">Select City</option>
          <option value="Nairobi">Nairobi</option>
          <option value="Mombasa">Mombasa</option>
          <option value="Kisumu">Kisumu</option>
          <option value="Nakuru">Nakuru</option>
          <option value="Eldoret">Eldoret</option>
        </select>
        <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)} className="search-input">
          <option value="">Property Type</option>
          <option value="House">House</option>
          <option value="Apartment">Apartment</option>
          <option value="Villa">Villa</option>
        </select>
        <select value={propertyStatus} onChange={(e) => setPropertyStatus(e.target.value)} className="search-input">
          <option value="">Status</option>
          <option value="For Rent">For Rent</option>
          <option value="For Sale">For Sale</option>
        </select>
        <input 
          type="number" 
          placeholder="Max Price" 
          value={priceLimit} 
          onChange={(e) => setPriceLimit(e.target.value)} 
          className="search-input"
        />
        <button className="search-button" onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;