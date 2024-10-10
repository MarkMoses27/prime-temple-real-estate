
import './FeaturedProperties.css'; // Add styles here

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      title: 'Luxury Villa in Nairobi',
      price: 'KES. 1,200,000',
      location: 'Nairobi, Kenya',
      image: '/assets/property1.jpg',
    },
    {
      id: 2,
      title: 'Modern Apartment in Mombasa',
      price: 'KES 650,000',
      location: 'Mombasa, Kenya',
      image: '/assets/property2.jpg',
    },
    {
      id: 3,
      title: 'Beachfront Villa in Diani',
      price: 'KES. 2,000,000',
      location: 'Diani, Kenya',
      image: '/assets/property3.jpg',
    },
  ];

  return (
    <section className="featured-properties">
      <h2>Featured Properties</h2>
      <div className="properties-grid">
        {properties.map((property) => (
          <div key={property.id} className="property-card">
            <img src={property.image} alt={property.title} className="property-image" />
            <div className="property-info">
              <h3>{property.title}</h3>
              <p>{property.location}</p>
              <p className="property-price">{property.price}</p>
              <button className="cta-button">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProperties;
