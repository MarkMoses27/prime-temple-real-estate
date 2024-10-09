import PropTypes from 'prop-types';
import './SearchResults.css'; // Import the CSS file for styling

const PropertyCard = ({ property }) => (
  <div className="property-card">
    <div className="property-image">
      <img src={property.image} alt={property.name} />
      <div className="property-status">{property.status}</div>
    </div>
    <div className="property-details">
      <h3>{property.name}</h3>
      <p className="property-location">{property.location}</p>
      <p className="property-price">${property.price.toLocaleString()}</p>
      <p className="property-type">{property.type}</p>
      <button className="view-details-button">View Details</button>
    </div>
  </div>
);

PropertyCard.propTypes = {
  property: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

const SearchResults = ({ properties, isLoading, error }) => {
  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  if (properties.length === 0) {
    return <div className="no-results">No properties found. Try adjusting your search criteria.</div>;
  }

  return (
    <div className="results-container">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

SearchResults.propTypes = {
  properties: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  })).isRequired,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
};

SearchResults.defaultProps = {
  isLoading: false,
  error: null,
};

export default SearchResults;