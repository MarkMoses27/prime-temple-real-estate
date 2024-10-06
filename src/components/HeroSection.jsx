import React, { useState, useEffect } from 'react';
import './HeroSection.css'; // Assuming your CSS file is named HeroSection.css

// Import your images
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
      cta: 'Explore Properties'
    },
    {
      image: HERO2,
      title: 'Discover Luxurious Living',
      subtitle: 'Explore our curated collection of premium properties.',
      cta: 'View Listings'
    },
    {
      image: HERO3,
      title: 'Expert Investment Guidance',
      subtitle: 'Let our experienced team help you make informed real estate decisions.',
      cta: 'Contact Us'
    }
  ];

  // Slide change effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

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
            <button className="cta-button">{slide.cta}</button>
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
