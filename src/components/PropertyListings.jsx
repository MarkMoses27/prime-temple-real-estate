import { useEffect } from 'react';
import './PropertyListings.css';

import VILLA from '../assets/villa.jpg';
import APARTMENT from '../assets/apartment.jpg';
import COTTAGE from '../assets/cottage.jpg';
import BEACHHOUSE from '../assets/beach-house.jpg';
import TOWNHOUSE from '../assets/townhouse.jpg';
import PENTHOUSE from '../assets/penthouse.jpg';

const properties = [
  {
    id: 1,
    title: "Luxurious Villa in Nairobi",
    location: "Nairobi, Kenya",
    price: "KSh 50,000,000",
    description: "A stunning villa located in the heart of Nairobi, with a modern design and spacious rooms.",
    imageUrl: VILLA,
  },
  {
    id: 2,
    title: "Modern Apartment in Mombasa",
    location: "Mombasa, Kenya",
    price: "KSh 25,000,000",
    description: "A sleek, modern apartment with ocean views and close proximity to the beach.",
    imageUrl: APARTMENT
  },
  {
    id: 3,
    title: "Cozy Cottage in Naivasha",
    location: "Naivasha, Kenya",
    price: "KSh 15,000,000",
    description: "A charming cottage in the serene environment of Naivasha, perfect for a quiet retreat.",
    imageUrl: COTTAGE
  },
  {
    id: 4,
    title: "Penthouse in Westlands",
    location: "Nairobi, Kenya",
    price: "KSh 70,000,000",
    description: "A luxurious penthouse with panoramic city views located in the prestigious Westlands district.",
    imageUrl: PENTHOUSE,
  },
  {
    id: 5,
    title: "Beach House in Malindi",
    location: "Malindi, Kenya",
    price: "KSh 40,000,000",
    description: "A beautiful beach house offering breathtaking views of the Indian Ocean.",
    imageUrl: BEACHHOUSE
  },
  {
    id: 6,
    title: "Townhouse in Karen",
    location: "Nairobi, Kenya",
    price: "KSh 60,000,000",
    description: "A spacious townhouse located in the serene suburb of Karen, with lush gardens and modern amenities.",
    imageUrl: TOWNHOUSE
  }
];

const PropertyListings = () => {

  // Scroll animation
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
    <section className="property-listings">
      <h1>Property Listings</h1>
      <p>Find a wide range of properties, from luxurious villas to modern apartments, all tailored to meet your needs.</p>
      
      <div className="property-grid">
        {properties.map((property) => (
          <div key={property.id} className="property-card">
            <img src={property.imageUrl} alt={property.title} className="property-image" />
            <div className="property-info">
              <h3>{property.title}</h3>
              <p>{property.location}</p>
              <p className="property-price">{property.price}</p>
              <p className="property-description">{property.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PropertyListings;
