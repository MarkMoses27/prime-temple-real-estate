import './Consulting.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faChartPie, faCogs, faUsers, faLightbulb, faHandshake } from '@fortawesome/free-solid-svg-icons';

const Consulting = () => {
  return (
    <section className="consulting-section">
      <div className="consulting-header">
        <h1>Consulting Services</h1>
        <p>Helping businesses and individuals achieve success through tailored solutions.</p>
      </div>

      <div className="consulting-services">
        <div className="service-card">
          <FontAwesomeIcon icon={faChartLine} className="service-icon" />
          <h3>Business Strategy</h3>
          <p>We help businesses develop strategic plans to reach their goals effectively through innovative solutions.</p>
        </div>
        <div className="service-card">
          <FontAwesomeIcon icon={faChartPie} className="service-icon" />
          <h3>Market Analysis</h3>
          <p>Our team provides in-depth market insights and analysis to keep you competitive and future-proof your business.</p>
        </div>
        <div className="service-card">
          <FontAwesomeIcon icon={faCogs} className="service-icon" />
          <h3>Operations Consulting</h3>
          <p>Optimize your operations with our expert guidance, focusing on maximizing efficiency and productivity.</p>
        </div>
        <div className="service-card">
          <FontAwesomeIcon icon={faUsers} className="service-icon" />
          <h3>Leadership Development</h3>
          <p>We offer leadership coaching and training to help you build effective teams and strengthen company culture.</p>
        </div>
      </div>

      <div className="consulting-benefits">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>
            <FontAwesomeIcon icon={faLightbulb} className="benefit-icon" />
            <span>Innovative Solutions: We use cutting-edge approaches tailored to your business needs.</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faHandshake} className="benefit-icon" />
            <span>Collaborative Approach: We work closely with you to ensure the best outcomes for your business.</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faChartLine} className="benefit-icon" />
            <span>Proven Expertise: Our consultants are industry experts with years of experience delivering results.</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faCogs} className="benefit-icon" />
            <span>End-to-End Support: From planning to implementation, we provide long-term support to achieve sustained success.</span>
          </li>
        </ul>
      </div>

      <div className="consulting-testimonials">
        <h2>What Our Clients Say</h2>
        <blockquote>
          "The consulting services provided by this team have significantly improved our business operations, and we are now on a path to continuous growth."
          <cite> – Jane Doe, CEO of XYZ Corp</cite>
        </blockquote>
      </div>
    </section>
  );
};

export default Consulting;
