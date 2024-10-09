import './Investments.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillWave, faPiggyBank, faChartLine, faShieldAlt, faWallet } from '@fortawesome/free-solid-svg-icons';

const Investment = () => {
  return (
    <section className="investment-section">
      <div className="investment-header">
        <h1>Investment Solutions</h1>
        <p>Drive your financial success with tailored investment strategies designed to meet your specific goals.</p>
      </div>

      <div className="investment-plans">
        <div className="plan-card">
          <FontAwesomeIcon icon={faMoneyBillWave} className="plan-icon" />
          <h3>Short-Term Investments</h3>
          <p>Achieve your financial goals quickly with low-risk investment opportunities designed for short-term returns.</p>
        </div>
        <div className="plan-card">
          <FontAwesomeIcon icon={faPiggyBank} className="plan-icon" />
          <h3>Long-Term Growth</h3>
          <p>Build wealth over time with stable and reliable long-term investment strategies that focus on sustainable growth.</p>
        </div>
        <div className="plan-card">
          <FontAwesomeIcon icon={faChartLine} className="plan-icon" />
          <h3>High-Yield Investments</h3>
          <p>Explore high-risk, high-reward investment options, balancing opportunities in dynamic markets for significant returns.</p>
        </div>
        <div className="plan-card">
          <FontAwesomeIcon icon={faWallet} className="plan-icon" />
          <h3>Portfolio Diversification</h3>
          <p>Mitigate risk and maximize potential returns by diversifying your investment portfolio across various asset classes.</p>
        </div>
      </div>

      <div className="investment-benefits">
        <h2>Key Benefits</h2>
        <ul>
          <li>
            <FontAwesomeIcon icon={faShieldAlt} className="benefit-icon" />
            <span>Risk Management: We implement rigorous risk control measures to protect your investments.</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faChartLine} className="benefit-icon" />
            <span>Market Expertise: Our team of seasoned financial experts guides you with data-driven strategies.</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faWallet} className="benefit-icon" />
            <span>Custom Solutions: Investment plans tailored to your unique financial goals and risk tolerance.</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faPiggyBank} className="benefit-icon" />
            <span>Long-Term Security: A focus on sustainable growth and wealth preservation over time.</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Investment;
