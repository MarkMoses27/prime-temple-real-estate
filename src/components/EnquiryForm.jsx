// src/components/EnquiryForm.jsx
import { useState } from 'react';
import './EnquiryForm.css';
import sampleImage from '../assets/sampleImage.jpg';  // Make sure to add the correct image path

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="enquiry-container">
      <div className="enquiry-image">
        <img src={sampleImage} alt="Beautiful property" />
      </div>
      <div className="enquiry-section">
        <h2 className="enquiry-title">Make an enquiry</h2>
        <p className="enquiry-description">
          Save your time and easily rent or sell your property with the lowest commission on the real estate market.
        </p>
        <form className="enquiry-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your name*"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email*"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your phone number*"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <button type="submit" className="enquiry-button">Make an enquiry</button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;
