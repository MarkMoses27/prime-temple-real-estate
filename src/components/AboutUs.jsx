import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-us-section">
      <div className="about-us-header">
        <h1>About Prime Temple Real Estate Solutions Limited</h1>
        <p>Leading the way in innovative real estate solutions, ensuring excellence in property management, investment, and development.</p>
      </div>

      <div className="about-us-content">
        <div className="mission-statement">
          <h2>Our Mission</h2>
          <p>At Prime Temple Real Estate Solutions Limited, we strive to offer top-tier real estate services that provide sustainable and profitable solutions for all our clients. Our mission is to simplify property management, investment, and development, making the process transparent and effective for everyone involved.</p>
        </div>

        <div className="company-details">
          <h2>Company Information</h2>
          <ul>
            <li><strong>Company Name:</strong> Prime Temple Real Estate Solutions Limited</li>
            <li><strong>Company Number:</strong> PVT-PJU232EP</li>
            <li><strong>Date of Registration:</strong> 26 September 2024</li>
            <li><strong>Nominal Share Capital:</strong> KES 1,000,000</li>
            <li><strong>Registered Office:</strong> Ngumba Estate, Thika Road, Ruaraka, Nairobi</li>
            <li><strong>Postal Address:</strong> P.O. Box 00618, G.P.O Nairobi</li>
            <li><strong>Phone:</strong> +254710333129</li>
            <li><strong>Email:</strong> templegrouplimited@gmail.com</li>
          </ul>
        </div>

        <div className="vision">
          <h2>Our Vision</h2>
          <p>We aim to be at the forefront of the real estate industry, delivering exceptional service through innovation, integrity, and a client-first approach. Prime Temple Real Estate Solutions Limited envisions a future where property ownership, management, and investment are seamless and accessible to everyone.</p>
        </div>

        <div className="directors">
          <h2>Leadership</h2>
          <p><strong>Joseph Temple Obare</strong>, our esteemed director and shareholder, has been instrumental in steering the company toward growth and success, ensuring that every project is executed with precision and care. His leadership ensures the company remains committed to its mission of delivering value to all stakeholders.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
