import React from 'react';

const PropertyListings = () => {
  const properties = [
    {
      id: 1,
      title: 'Luxury Villa in Nairobi',
      price: 'KSh 25,000,000',
      imageUrl: '/images/villa.jpg',
      description: 'A beautiful villa with modern architecture.',
    },
    {
      id: 2,
      title: 'Modern Apartment in Kisumu',
      price: 'KSh 15,000,000',
      imageUrl: '/images/apartment.jpg',
      description: 'A modern apartment in the heart of the city.',
    },
    {
      id: 3,
      title: 'Beachfront House in Mombasa',
      price: 'KSh 40,000,000',
      imageUrl: '/images/beachhouse.jpg',
      description: 'A stunning beachfront house with ocean views.',
    }
  ];

  return (
    <section className="property-listings">
      <h1>Property Listings</h1>
      <div className="properties-grid">
        {properties.map(property => (
          <div key={property.id} className="property-card">
            <img src={property.imageUrl} alt={property.title} className="property-image" />
            <h2>{property.title}</h2>
            <p>{property.description}</p>
            <p className="property-price">{property.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PropertyListings;
