// src/pages/Home.jsx
import { useState } from 'react';
import HeroSection from '../components/HeroSection';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';
import FeaturedProperties from '../components/FeaturedProperties';
import HowItWorks from '../components/HowItWorks';
import EnquiryForm from '../components/EnquiryForm';

const Home = () => {
  const [filteredProperties, setFilteredProperties] = useState([]);

  // Handle the search action
  const handleSearch = (searchCriteria) => {
    const { location, propertyType, propertyStatus, priceLimit } = searchCriteria;

    // Filter properties based on search criteria
    const results = propertiesData.filter(property => {
      return (
        (location === '' || property.location === location) &&
        (propertyType === '' || property.type === propertyType) &&
        (propertyStatus === '' || property.status === propertyStatus) &&
        (priceLimit === '' || property.price <= parseInt(priceLimit))
      );
    });

    setFilteredProperties(results);
  };

  return (
    <div>
      <HeroSection />
      <SearchBar onSearch={handleSearch} />
      <SearchResults properties={filteredProperties} />
      <FeaturedProperties />
      <HowItWorks />
      <EnquiryForm />
    </div>
  );
};

export default Home;
