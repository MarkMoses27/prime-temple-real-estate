// src/components/SearchResults.jsx
import React from 'react';

const SearchResults = ({ properties }) => {
  if (properties.length === 0) {
    return <p>No properties found.</p>;
  }

  return (
    <div className="results-container">
      <h2>Search Results</h2>
      <ul>
        {properties.map((property, index) => (
          <li key={index}>
            <h3>{property.name}</h3>
            <p>{property.location} - ${property.price}</p>
            <p>Type: {property.type}, Status: {property.status}</p>
            <p>Bedrooms: {property.bedrooms}, Bathrooms: {property.bathrooms}, Kitchens: {property.kitchens}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
