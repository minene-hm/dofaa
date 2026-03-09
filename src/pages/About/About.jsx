import React, { useState, useEffect, useRef } from "react";
import "./About.css";
import heroImg from '../../assets/images/heroabout.png';
import brandImage from '../../assets/images/brand-message.png';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, delay = 0, direction = "up", className = "", style = {} }) {
  const [ref, visible] = useReveal();
  const transforms = { up: "translateY(32px)", down: "translateY(-32px)", left: "translateX(-32px)", right: "translateX(32px)" };
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

export default function AboutPage() {
  const [heroVisible, setHeroVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(timer);
  }, []);

  const heroStyle = (delay) => ({
    opacity: heroVisible ? 1 : 0,
    transform: heroVisible ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  });

  return (
    <>
      <Header />

      <div>
        <section className="about-hero">
          <div className="about-hero__background" style={{ backgroundImage: `url(${heroImg})` }} />
          <div className="about-hero__overlay" />
          <div className="about-hero__card">
            <h1 className="about-hero__title" style={heroStyle(0.1)}>
              Our Mission:<br />Connecting Two Worlds
            </h1>
            <p className="about-hero__subtitle" style={heroStyle(0.25)}>
              The Algerian economy relies on cash, but the future is digital.
            </p>
            <p className="about-hero__highlight" style={heroStyle(0.38)}>
              We empower those who prefer cash with the power of digital.
            </p>
          </div>
        </section>

        <section className="vision-section">
          <Reveal>
            <h2 className="vision-title">Our Vision: The Algeria of Tomorrow</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="vision-subtitle">
              We are building a financial ecosystem that benefits everyone, modernizing exchanges without leaving anyone behind.
            </p>
          </Reveal>
          <div className="vision-cards">
            {[
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="8" height="8" rx="1" />
                    <rect x="14" y="2" width="8" height="8" rx="1" />
                    <rect x="14" y="14" width="8" height="8" rx="1" />
                    <rect x="2" y="14" width="8" height="8" rx="1" />
                  </svg>
                ),
                title: "Digital Transformation",
                desc: "Reduce dependence on physical cash while significantly increasing the speed and security of national transactions."
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                ),
                title: "Support for SMEs & Small Shops",
                desc: "Enable small local merchants to accept digital payments without costly bank terminals using QR Codes."
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M5.5 20v-2a6.5 6.5 0 0 1 13 0v2" />
                  </svg>
                ),
                title: "Total Inclusion",
                desc: "Include rural areas and unbanked populations through our extensive network of local agents and USSD support."
              }
            ].map((card, i) => (
              <Reveal key={i} delay={0.2 + i * 0.1}>
                <div className="vision-card">
                  <div className="vision-icon">{card.icon}</div>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="values-section">
          <Reveal>
            <h2 className="values-title">Our Core Values</h2>
          </Reveal>
          <div className="values-cards">
            {[
              {
                icon: (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#263B6A" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                ),
                title: "Proximity",
                desc: "A network of human agents across Algeria ensures money is always accessible close to home."
              },
              {
                icon: (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#263B6A" strokeWidth="2">
                    <path d="M12 2a10 10 0 0 1 10 10c0 5-3 9-10 9-6 0-10-4-10-9 0-5 4-10 10-10z" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                ),
                title: "Innovation",
                desc: "Use Artificial Intelligence to secure every transaction and help Algerians better manage their budgets."
              },
              {
                icon: (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#263B6A" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                ),
                title: "Accessibility",
                desc: "A simple interface available in Arabic, French, and dialects, usable by everyone, even without a smartphone."
              }
            ].map((card, i) => (
              <Reveal key={i} delay={0.2 + i * 0.15}>
                <div className="value-card">
                  <div className="value-icon">{card.icon}</div>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="brand-section">
          <div className="brand-container">
            <div className="brand-left">
              <Reveal direction="left">
                <h2 className="brand-title">DOFAA, By Us, For You</h2>
                <p className="brand-text">
                  Cutting-edge technology, designed and developed with a deep understanding of our country's realities.
                </p>
                <div className="brand-badge">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#263B6A" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4M12 8h.01" />
                  </svg>
                  <span>DOFAA: The link between your present and financial future.</span>
                </div>
              </Reveal>
            </div>
            <div className="brand-right">
              <Reveal direction="right" delay={0.2}>
                <div className="brand-image-container">
                  <img src={brandImage} alt="Wassel brand" className="brand-image" />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}