import { useState } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

const SearchPage = () => {
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = (searchCriteria) => {
    setIsLoading(true);
    setError(null);

    setTimeout(() => {
      const mockData = [
        {
          id: '1',
          image: '/path/to/image1.jpg',
          name: 'Modern House in Nairobi',
          location: 'Nairobi',
          price: 1500000,
          type: 'House',
          status: 'For Sale',
        },
        {
          id: '2',
          image: '/path/to/image2.jpg',
          name: 'Beachfront Villa in Mombasa',
          location: 'Mombasa',
          price: 2500000,
          type: 'Villa',
          status: 'For Rent',
        },
      ];

      const filteredProperties = mockData.filter((property) =>
        (!searchCriteria.location || property.location.toLowerCase() === searchCriteria.location.toLowerCase()) &&
        (!searchCriteria.propertyType || property.type.toLowerCase() === searchCriteria.propertyType.toLowerCase()) &&
        (!searchCriteria.propertyStatus || property.status.toLowerCase() === searchCriteria.propertyStatus.toLowerCase()) &&
        (!searchCriteria.priceLimit || property.price <= parseInt(searchCriteria.priceLimit, 10))
      );

      setProperties(filteredProperties);
      setIsLoading(false);

      if (filteredProperties.length === 0) {
        setError('No properties found matching your criteria.');
      }
    }, 1000);
  };

  return (
    <div className="search-page">
      <SearchBar onSearch={handleSearch} />
      <SearchResults properties={properties} isLoading={isLoading} error={error} />
    </div>
  );
};

export default SearchPage;
