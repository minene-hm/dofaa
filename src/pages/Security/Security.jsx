import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useInView } from '../../hooks/useInView';
import { FaBrain, FaFingerprint, FaLock, FaCheckCircle } from 'react-icons/fa';  
import infraIllustration from '../../assets/images/security-infra.png';       
import teamCollaborationImage from '../../assets/images/security-shield.png';
import businessHandshakeImage from '../../assets/images/phonesec.jpg';


import './Security.css';

const Security = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3 });
  const [pillarsTitleRef, pillarsTitleInView] = useInView();
  const [pillarsCardsRef, pillarsCardsInView] = useInView({ threshold: 0.2 });
  const [stabilityLeftRef, stabilityLeftInView] = useInView();
  const [stabilityRightRef, stabilityRightInView] = useInView();

  return (
    <div>
      <Header />
      <main>
        <section
          ref={heroRef}
          className={`security-hero animate-on-scroll fade-in-up ${heroInView ? 'animate-in' : ''}`}
        >
          <div className="hero-left">
            <h1 className="hero-title">
              Your security is built on a{' '}
              <span className="highlight">simple, clear, and solid foundation</span>
            </h1>
            <p className="hero-description">
              We removed the dominant blue background for a lighter presentation while maintaining a strong financial identity. Every transaction remains protected with institutional-level rigor.
            </p>
          </div>
          <div className="hero-right">
            <div className="image-stack">
              <div className="dots-pattern"></div>
              <img
                src={teamCollaborationImage}
                alt="Young team collaborating"
                className="stack-top-image"
              />

              <img
                src={businessHandshakeImage}
                alt="Business handshake"
                className="stack-bottom-image"
              />
            </div>
          </div>
        </section>

        <section className="pillars-section">
          <h2
            ref={pillarsTitleRef}
            className={`section-title animate-on-scroll fade-in-up ${pillarsTitleInView ? 'animate-in' : ''}`}
          >
            The 3 Pillars of Trust
          </h2>
          <div
            ref={pillarsCardsRef}
            className={`pillars-container animate-on-scroll fade-in-up ${pillarsCardsInView ? 'animate-in' : ''}`}
          >
  
            <div className="pillar-card">
              <div className="pillar-icon">
                <FaLock />
              </div>
              <h3 className="pillar-title">End-to-End Encryption</h3>
              <p className="pillar-description">
                Your transactions and personal data are protected from start to finish with high security standards designed for a trusted financial service.
              </p>
              <div className="pillar-badge">Standard AES-256</div>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">
                <FaBrain />
              </div>
              <h3 className="pillar-title">AI-Powered Fraud Detection</h3>
              <p className="pillar-description">
                Our system continuously monitors the network, detects abnormal behavior, and acts quickly to mitigate risks before they become an issue.
              </p>
              <div className="pillar-badge">Real-Time Analysis</div>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">
                <FaFingerprint />
              </div>
              <h3 className="pillar-title">Secure Identity Verification</h3>
              <p className="pillar-description">
                Each account is protected by reliable validation protocols to ensure that only the authorized user can access their operations.
              </p>
              <div className="pillar-badge">Biometrics & KYC</div>
            </div>
          </div>
        </section>

        <section className="finance-stability-section">
          <div className="finance-stability-left">
            <div
              ref={stabilityLeftRef}
              className={`animate-on-scroll slide-in-left ${stabilityLeftInView ? 'animate-in' : ''}`}
            >
              <h2 className="finance-stability-title">
                Designed for Sustainable Financial Stability
              </h2>

              <p className="finance-stability-description">
                Wassel relies on a solid infrastructure, regular audits, and strict backup mechanisms to protect money, data, and service availability.
              </p>

              <div className="finance-cards-container">

                <div className="finance-security-card">
                  <FaCheckCircle className="finance-card-icon" />
                  <div className="finance-card-content">
                    <h4 className="finance-card-title">
                      Encrypted backups distributed across multiple servers
                    </h4>
                  </div>
                </div>

                <div className="finance-security-card">
                  <FaCheckCircle className="finance-card-icon" />
                  <div className="finance-card-content">
                    <h4 className="finance-card-title">
                      Regular security audits by independent experts
                    </h4>
                  </div>
                </div>

                <div className="finance-security-card">
                  <FaCheckCircle className="finance-card-icon" />
                  <div className="finance-card-content">
                    <h4 className="finance-card-title">
                      Compliance aligned with local financial regulations
                    </h4>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="finance-stability-right">
            <div
              ref={stabilityRightRef}
              className={`finance-stability-illustration animate-on-scroll slide-in-right ${stabilityRightInView ? 'animate-in' : ''}`}
            >
              <div className="finance-dots-pattern finance-dots-top-left"></div>
              <div className="finance-dots-pattern finance-dots-bottom-right"></div>

              <img src={infraIllustration} alt="Security infrastructure" />

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Security;