import { Link } from "react-router-dom";

import "./HeroSection.scss";
import HeroImage from "../Images/Home.png";

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-background-shape shape-one"></div>
      <div className="hero-background-shape shape-two"></div>

      <div className="container hero-container">

        {/* Hero Content */}
        <div className="hero-content">
          <span className="hero-label">
            BEAUTY & WELLNESS, SIMPLIFIED
          </span>

          <h1>
            Discover your
            <span> perfect salon.</span>
          </h1>

          <p>
            Find trusted salons, explore services, choose
            your favorite stylist, and book your appointment
            effortlessly with Glōvia.
          </p>

          <div className="hero-actions">
            <Link
              to="/login"
              className="primary-btn"
            >
              Find a Salon
            </Link>

            <Link
              to="/services"
              className="secondary-btn"
            >
              Explore Services
            </Link>
          </div>

          <div className="hero-trust">
            <div>
              <strong>500+</strong>
              <span>Salons</span>
            </div>

            <div>
              <strong>10K+</strong>
              <span>Bookings</span>
            </div>

            <div>
              <strong>4.8</strong>
              <span>Average Rating</span>
            </div>
          </div>
        </div>

        {/* Single Hero Image */}
        <div className="hero-visual">
          <div className="hero-image">
            <img
              src={HeroImage}
              alt="Glōvia salon experience"
            />
          </div>

          {/* Floating Booking Card
          <div className="floating-card booking-card">
            <div className="floating-icon">✓</div>

            <div>
              <strong>Appointment booked</strong>
              <span>Today · 4:30 PM</span>
            </div>
          </div> */}

          {/* Floating Rating Card */}
          <div className="floating-card rating-card">
            <strong>4.9</strong>
            <span>★★★★★</span>
            <small>Salon rating</small>
          </div>
        </div>

      </div>
    </section>
  );
}

export default HeroSection;