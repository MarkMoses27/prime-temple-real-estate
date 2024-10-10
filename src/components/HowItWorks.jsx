// src/components/HowItWorks.jsx
import './HowItWorks.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHandshake, faHome } from '@fortawesome/free-solid-svg-icons';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: 'Search for Your Dream Home',
      description: 'Browse our extensive listings of properties and filter by location, budget, and more to find the home that suits your needs.',
      icon: faSearch,
    },
    {
      id: 2,
      title: 'Schedule a Visit',
      description: 'Once you’ve found a property you’re interested in, schedule a visit with one of our expert real estate agents.',
      icon: faHandshake,
    },
    {
      id: 3,
      title: 'Move Into Your New Home',
      description: 'After making your decision, complete the purchase process and move into the home of your dreams!',
      icon: faHome,
    },
  ];

  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <div className="steps-grid">
        {steps.map((step) => (
          <div key={step.id} className="step-card">
            <FontAwesomeIcon icon={step.icon} className="step-icon" />
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
