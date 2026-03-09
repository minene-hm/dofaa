import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useInView } from '../../hooks/useInView';
import appScreen1 from '../../assets/images/phone.png';
import phoneDashboard from '../../assets/images/phone_dashboard.png';
import eclipseImage from '../../assets/images/ellipse.png';
import './Home.css';

const Home = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3 });
  const [problemsRef, problemsInView] = useInView({ threshold: 0.2 });
  const [solutionRef, solutionInView] = useInView({ threshold: 0.2 });
  const [servicesTitleRef, servicesTitleInView] = useInView();
  const [servicesCardsRef, servicesCardsInView] = useInView({ threshold: 0.2 });
  const [stepsRef, stepsInView] = useInView({ threshold: 0.2 });

  return (
    <div>
      <Header />

      <main>
        <section
          ref={heroRef}
          className={`hero animate-on-scroll fade-in-up ${heroInView ? 'animate-in' : ''}`}
        >
          <div className="leftContent">
            <h1 className="title">Seamless Financial Transfers in Algeria</h1>
            <p className="description">
              Simplify your financial transactions with Dofaa.
              A hybrid platform combining absolute security, instant speed, and proven reliability for all your everyday needs.
            </p>
            <button className="downloadBtn">Download the App →</button>
          </div>
          <div className="rightImages">
            <img src={eclipseImage} alt="" className="eclipse-image" />
            <img src={appScreen1} alt="App screen" className="topImage" />
          </div>
        </section>

        <section
          ref={problemsRef}
          className={`section-problems animate-on-scroll fade-in-up ${problemsInView ? 'animate-in' : ''}`}
        >
          <h2 className="section-title">Daily Cash Challenges</h2>
          <div className="cards-container">
            <div className="card">
              <div className="icon-container">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="card-title">Security Risks</h3>
              <p className="card-description">
                Carrying large amounts of cash exposes users and merchants to unnecessary theft and loss risks.
              </p>
            </div>

            <div className="card">
              <div className="icon-container">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 className="card-title">Wasted Time</h3>
              <p className="card-description">
                Endless queues at ATMs and bank counters significantly slow down daily transactions.
              </p>
            </div>

            <div className="card">
              <div className="icon-container">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              </div>
              <h3 className="card-title">Lack of Traceability</h3>
              <p className="card-description">
                Using only cash makes it difficult to track expenses and manage personal or business budgets effectively.
              </p>
            </div>
          </div>
        </section>

        <section
          ref={solutionRef}
          className={`section-solution animate-on-scroll fade-in-up ${solutionInView ? 'animate-in' : ''}`}
        >
          <div className="solution-left">
            <h2 className="solution-title">Dofaa Hybrid : The Solution</h2>
            <p className="solution-description">
              We designed a unique ecosystem that digitizes your cash while maintaining a reassuring physical presence through our network.
            </p>

            <div className="features-list">
              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="feature-text">
                  <h4>Banking Security</h4>
                  <p>End-to-end encryption and biometric authentication to protect every transaction.</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="feature-text">
                  <h4>Extensive Hybrid Network</h4>
                  <p>Thousands of partner relay points across the country for deposits and withdrawals.</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="feature-text">
                  <h4>Absolute Instantaneity</h4>
                  <p>Money is available in your app the second you make your physical deposit.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="solution-right">
            <img src={phoneDashboard} alt="Phone dashboard" className="phone-image" />
          </div>
        </section>

        <section className="services-section">
          <h2
            ref={servicesTitleRef}
            className={`services-title animate-on-scroll fade-in-up ${servicesTitleInView ? 'animate-in' : ''}`}
          >
            Our Main Services
          </h2>
          <p
            className={`services-subtitle animate-on-scroll fade-in-up ${servicesTitleInView ? 'animate-in' : ''}`}
            style={{ animationDelay: '0.2s' }} 
          >
            Discover the features designed to simplify your financial life.
          </p>

          <div
            ref={servicesCardsRef}
            className={`services-cards-container animate-on-scroll fade-in-up ${servicesCardsInView ? 'animate-in' : ''}`}
          >
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 2l4 4-4 4" />
                  <path d="M3 12h15.5M7 12c-1.5 0-4 .5-4 4v3c0 1.5 1.5 3 3 3h12c1.5 0 3-1.5 3-3v-3c0-3.5-2.5-4-4-4" />
                  <path d="M7 12V8c0-2 2-4 4-4h4c2 0 4 2 4 4v4" />
                </svg>
              </div>
              <h3 className="service-card-title">Instant Transfers</h3>
              <p className="service-card-description">
                Send money to your loved ones in one click, 24/7, with no hidden fees or waiting times.
              </p>
            </div>

            <div className="service-card highlighted">
              <span className="badge">POPULAR</span>
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                  <line x1="6" y1="10" x2="6" y2="14" />
                  <line x1="10" y1="6" x2="14" y2="6" />
                  <line x1="18" y1="10" x2="18" y2="14" />
                  <line x1="10" y1="18" x2="14" y2="18" />
                </svg>
              </div>
              <h3 className="service-card-title">QR Code Payment</h3>
              <p className="service-card-description">
                Scan and pay for your purchases at partner merchants instantly and contact-free.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 10h16l-1 8H5l-1-8z" />
                  <path d="M8 6v4M16 6v4" />
                  <circle cx="12" cy="15" r="1" />
                  <path d="M20 10H4V8c0-2 2-4 4-4h8c2 0 4 2 4 4v2z" />
                </svg>
              </div>
              <h3 className="service-card-title">Easy Withdrawal</h3>
              <p className="service-card-description">
                Generate a unique withdrawal code in the app and collect your cash at any Dofaa relay point.
              </p>
            </div>
          </div>
        </section>

        <section
          ref={stepsRef}
          className={`steps-section animate-on-scroll fade-in-up ${stepsInView ? 'animate-in' : ''}`}
        >
          <h2 className="steps-title">How It Works</h2>
          <p className="steps-subtitle">A smooth user experience in three simple steps.</p>

          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <h3 className="step-title">Deposit</h3>
              <p className="step-description">
                Deposit your cash at an authorized Wassel point or recharge directly via your account.
              </p>
            </div>

            <div className="step">
              <div className="step-number">2</div>
              <h3 className="step-title">Send & Pay</h3>
              <p className="step-description">
                Instantly transfer funds to your loved ones or pay for purchases at partner merchants.
              </p>
            </div>

            <div className="step">
              <div className="step-number">3</div>
              <h3 className="step-title">Withdrawal</h3>
              <p className="step-description">
                The recipient can keep the money digitally or withdraw it in cash whenever they want.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;