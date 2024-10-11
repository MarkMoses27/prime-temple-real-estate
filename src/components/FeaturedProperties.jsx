import  { useEffect } from 'react';
import './FeaturedProperties.css';

import VILLA from '../assets/villa.jpg';
import PENTHOUSE from '../assets/penthouse.jpg';
import BEACHHOUSE from '../assets/beach-house.jpg';
import APARTMENT from '../assets/apartment.jpg';
import TOWNHOUSE from '../assets/townhouse.jpg';
import COTTAGE from '../assets/cottage.jpg';

const featuredProperties = [
  {
    id: 1,
    title: "Luxury Villa in Lavington",
    location: "Lavington, Nairobi",
    price: "KSh 120,000,000",
    description: "A stunning 6-bedroom villa featuring a swimming pool, modern interiors, and a spacious garden.",
    imageUrl: VILLA,
    bedrooms: 6,
    bathrooms: 5,
    squareFootage: 7000
  },
  {
    id: 2,
    title: "Modern Penthouse in Kileleshwa",
    location: "Kileleshwa, Nairobi",
    price: "KSh 90,000,000",
    description: "An exclusive penthouse with breathtaking views of Nairobi, equipped with modern amenities.",
    imageUrl: PENTHOUSE,
    bedrooms: 4,
    bathrooms: 4,
    squareFootage: 4000
  },
  {
    id: 3,
    title: "Beachfront Villa in Kilifi",
    location: "Kilifi, Kenya",
    price: "KSh 150,000,000",
    description: "A luxurious beachfront villa in Kilifi offering stunning views of the Indian Ocean.",
    imageUrl: BEACHHOUSE,
    bedrooms: 8,
    bathrooms: 6,
    squareFootage: 10000
  },
  {
    id: 4,
    title: "Luxury Apartment in Westlands",
    location: "Westlands, Nairobi",
    price: "KSh 40,000,000",
    description: "A high-end, modern apartment with easy access to malls, restaurants, and offices.",
    imageUrl: APARTMENT,
    bedrooms: 3,
    bathrooms: 2,
    squareFootage: 1500
  },
  {
    id: 5,
    title: "Modern Townhouse in Runda",
    location: "Runda, Nairobi",
    price: "KSh 65,000,000",
    description: "A spacious 4-bedroom townhouse with beautiful gardens and modern finishes.",
    imageUrl: TOWNHOUSE,
    bedrooms: 4,
    bathrooms: 4,
    squareFootage: 3500
  },
  {
    id: 6,
    title: "Serene Cottage in Naivasha",
    location: "Naivasha, Kenya",
    price: "KSh 25,000,000",
    description: "A cozy cottage in the serene landscapes of Naivasha, perfect for a weekend retreat.",
    imageUrl: COTTAGE,
    bedrooms: 2,
    bathrooms: 2,
    squareFootage: 1200
  }
];

const FeaturedProperties = () => {
  useEffect(() => {
    const options = {
      threshold: 0.2
    };
    
    const handleScrollAnimation = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    };

    const observer = new IntersectionObserver(handleScrollAnimation, options);
    const propertyCards = document.querySelectorAll('.property-card');
    propertyCards.forEach(card => observer.observe(card));
  }, []);

  return (
    <section className="featured-properties-section">
      <h1>Featured Properties</h1>
      <p>Explore some of the finest and most luxurious properties available for you. Each has been handpicked for its quality, location, and unique features.</p>

      <div className="property-grid">
        {featuredProperties.map((property) => (
          <div key={property.id} className="property-card">
            <img src={property.imageUrl} alt={property.title} className="property-image" />
            <div className="property-info">
              <h3>{property.title}</h3>
              <p>{property.location}</p>
              <p className="property-price">{property.price}</p>
              <p className="property-description">{property.description}</p>
              
              {/* Display Bedrooms, Bathrooms, and Square Footage */}
              <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
              <p><strong>Bathrooms:</strong> {property.bathrooms}</p>
              <p><strong>Square Footage:</strong> {property.squareFootage} sqft</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProperties;
