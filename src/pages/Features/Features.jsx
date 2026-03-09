import React from 'react';
import './Features.css';
import f1 from '../../assets/images/f1.png';
import f2 from '../../assets/images/f2.png';
import f3 from '../../assets/images/f3.png';
import f4 from '../../assets/images/f4.png';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useInView } from '../../hooks/useInView'; 

function Reveal({ children, delay = 0, direction = "up", className = "", style = {} }) {
  const [ref, visible] = useInView({ threshold: 0.2 });
  const transforms = {
    up: "translateY(32px)",
    down: "translateY(-32px)",
    left: "translateX(-32px)",
    right: "translateX(32px)"
  };
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(0,0)" : transforms[direction],
        transition: `opacity 0.65s cubic-bezier(.22,1,.36,1) ${delay}s, transform 0.65s cubic-bezier(.22,1,.36,1) ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

const FeatureSection = ({ tagline, title, description, image, reverse, children }) => (
  <section className={`feature-row ${reverse ? 'reverse' : ''}`}>
    <div className="feature-text">
      <span className="tagline">{tagline}</span>
      <h2 className="feature-title">{title}</h2>
      <p className="feature-description">{description}</p>
      {children}
    </div>
    <div className="feature-image-container">
      <img src={image} alt={title} className="feature-img" />
    </div>
  </section>
);

const FeaturesPage = () => {
  return (
    <>
      <Header />

      <Reveal>
        <section className="hero-minimal">
          <h1>Technology at the Service of Your Everyday Life</h1>
          <p>
            Discover an innovative financial solution designed to simplify your transactions, enhance accessibility,
            and provide secure digital services for everyone.
          </p>
        </section>
      </Reveal>

      <main className="features-list">

        <Reveal delay={0.1}>
          <FeatureSection
            tagline="Instant Banking"
            title="No Banking Delays. Instant Connectivity."
            description="Send and receive money instantly without waiting for traditional banking processing times. Our digital solution ensures fast, reliable, and secure financial transactions anytime, Accessibility 24/7, Secure and reliable transactions, No traditional banking delays"
            image={f2}
          >
            <div className="check-list">
              <span>Local transactions in under one second</span>
              <span>State-of-the-art security for every transfer</span>
            </div>
          </FeatureSection>
        </Reveal>

        <Reveal delay={0.2}>
          <FeatureSection
            tagline="Adaptability"
            title="Cash Bridge ↔ Digital"
            description="With Cash bridge + Digital, you can easily switch between physical cash and digital money. This hybrid system allows users to benefit from the convenience of digital payments while maintaining access to traditional cash transactions."
            image={f1}
            reverse
          >
            <button className="btn-action">Explore the agent network ➔</button>
          </FeatureSection>
        </Reveal>

        <Reveal delay={0.3}>
          <FeatureSection
            tagline="Artificial Intelligence"
            title="Your Personal Financial Assistant"
            description="More than just an app, our built-in AI analyzes your habits, secures your purchases, and suggests optimizations tailored to your profile."
            image={f4}
          >
            <div className="info-cards">
 
              <Reveal delay={0.4} direction="up">
                <div className="mini-card">
                  <span className="icon">📊</span>
                  <strong>Spending Insights</strong>
                  <p>Automatic categorization of your purchases with clear visual charts.</p>
                </div>
              </Reveal>
              <Reveal delay={0.5} direction="up">
                <div className="mini-card">
                  <span className="icon">💡</span>
                  <strong>Savings Suggestions</strong>
                  <p>Smart recommendations to optimize your monthly budget.</p>
                </div>
              </Reveal>
            </div>
          </FeatureSection>
        </Reveal>

        <Reveal delay={0.4}>
          <FeatureSection
            tagline="Full Inclusion"
            title="Support USSD: Accessible to Everyone"
            description="No smartphone? No reliable internet connection? No problem. The Defax network is accessible via USSD codes, allowing anyone to manage their finances from anywhere."
            image={f3}
            reverse
          >
            <Reveal delay={0.5} direction="up">
              <div className="ussd-badge">
                <span className="ussd-code">*999#</span>
                <p>Enter this code to access your services.</p>
              </div>
            </Reveal>
          </FeatureSection>
        </Reveal>

      </main>

      <Footer />
    </>
  );
};

export default FeaturesPage;