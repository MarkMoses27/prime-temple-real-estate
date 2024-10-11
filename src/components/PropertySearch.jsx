import  { useState } from 'react';
import SearchBar from './SearchBar';
import properties from '../data/properties';

const PropertySearch = () => {
  const [searchResults, setSearchResults] = useState(properties);

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <div>
      <SearchBar onSearchResults={handleSearchResults} />
      <div className="property-list">
        {searchResults.map(property => (
          <div key={property.id} className="property-card">
            <img src={property.image} alt={property.name} />
            <h3>{property.name}</h3>
            <p>Location: {property.location}</p>
            <p>Type: {property.type}</p>
            <p>Status: {property.status}</p>
            <p>Price: ${property.price.toLocaleString()}</p>
            <p>Bedrooms: {property.bedrooms}</p>
            <p>Bathrooms: {property.bathrooms}</p>
            <p>Area: {property.area} sqm</p>
            <p>{property.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertySearch;