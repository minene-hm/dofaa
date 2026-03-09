// src/pages/Works/Works.jsx
import React, { useState, useEffect, useRef } from "react";
import "./Works.css";

import m1 from '../../assets/images/m1.png';
import m2 from '../../assets/images/m2.png';
import m3 from '../../assets/images/m3.png';
import m4 from '../../assets/images/m4.png';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return [ref, visible];
}

function Reveal({ children, delay = 0, direction = "up", className = "", style = {} }) {
  const [ref, visible] = useReveal();

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
        ...style
      }}
    >
      {children}
    </div>
  );
}

const MarcheSection = ({ tagline, title, description, image, reverse, children }) => (
  <section className={`marche-row ${reverse ? 'reverse' : ''}`}>
    <div className="marche-text">
      <Reveal>
        <span className="tagline">{tagline}</span>
        <h2 className="marche-title">{title}</h2>
        <p className="marche-description">{description}</p>
      </Reveal>
      {children && <Reveal delay={0.1}>{children}</Reveal>}
    </div>
    <div className="marche-image-container">
      <Reveal direction={reverse ? "left" : "right"} delay={0.2}>
        <img src={image} alt={title} className="marche-img" />
      </Reveal>
    </div>
  </section>
);

export default function MarchePage() {
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

      <section className="marche-hero">
        <Reveal>
          <h1 style={heroStyle(0.1)}>How It Works ?</h1>
          <p style={heroStyle(0.25)}>
            Explore a clear and intuitive process, thoughtfully designed to simplify every 
            step of your daily tasks <br /> making your experience smooth, efficient, and effortless.
          </p>
        </Reveal>
      </section>

      <main className="marche-list">

        <MarcheSection
          tagline="Money Transfer"
          title="Send money instantly, right from your phone"
          description="Forget long waiting lines. Send money to anyone in Algeria with just a few taps. Your transfer is completed within seconds, ensuring a fast, simple, and completely secure way to move your money anytime you need."
          image={m1}
        />

        <MarcheSection
          tagline="Innovation"
          title="From Cash to Digital : Our Innovation"
          description="From physical cash to instant digital credit—deposit with an authorized agent and watch it appear in your app."
          image={m2}
          reverse
        >
          <div className="check-list">
            <span>Trusted, certified agents right in your area.</span>
            <span>A conversion with no hidden fees and no delays.</span>
          </div>
        </MarcheSection>

        <MarcheSection
          tagline="Simple Cash-Out"
          title="From Digital to Cash in an Instant"
          description="Need physical cash? Withdraw your digital balance instantly through nearby agents."
          image={m3}
        >
          <div className="action-buttons">
            <button className="btn-action">Cash Out at a Deposit Point</button>
            <button className="btn-outline">Find an agent &rarr;</button>
          </div>
        </MarcheSection>

        <MarcheSection
          tagline="Merchant Payment"
          title="Secure QR Code Payments"
          description="Make payments quickly by scanning a QR code at participating merchants. This method ensures fast, contactless, and secure transactions."
          image={m4}
          reverse
        />
      </main>

      <Footer />
    </>
  );
}