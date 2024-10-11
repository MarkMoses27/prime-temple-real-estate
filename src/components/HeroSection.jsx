import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './HeroSection.css'; 

import HERO1 from '../assets/hero.jpg';
import HERO2 from '../assets/hero1.jpg';
import HERO3 from '../assets/hero2.png';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slide content
  const slides = [
    {
      image: HERO1,
      title: 'Welcome to Prime Temple Real Estate',
      subtitle: 'Your trusted partner for property management and investment solutions.',
      cta: 'Explore Properties',
      link: '/properties'  
    },
    {
      image: HERO2,
      title: 'Discover Luxurious Living',
      subtitle: 'Explore our curated collection of premium properties.',
      cta: 'View Listings',
      link: '/properties'  
    },
    {
      image: HERO3,
      title: 'Expert Investment Guidance',
      subtitle: 'Let our experienced team help you make informed real estate decisions.',
      cta: 'Contact Us',
      link: '/contact'  // Link to the contact page
    }
  ];

  // Slide change effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="hero-content">
            <h1>{slide.title}</h1>
            <p>{slide.subtitle}</p>
            {/* Use Link for CTA button to navigate to the appropriate route */}
            <Link to={slide.link} className="cta-button">
              {slide.cta}
            </Link>
          </div>
        </div>
      ))}
      <div className="slider-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
