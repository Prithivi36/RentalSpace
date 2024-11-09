import React, { useState } from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState('Renting');

  const renderContent = () => {
    switch (activeTab) {
      case 'Renting':
        return (
          <div className="content">
            <div className="icon-text">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <strong>Find a great spot</strong><br />
                Search for what you need, where you need it.
              </div>
            </div>
            <div className="icon-text">
              <i className="fas fa-star"></i>
              <div>
                <strong>Book in minutes</strong><br />
                Easily compare options and book online.
              </div>
            </div>
            <div className="icon-text">
              <i className="fas fa-dollar-sign"></i>
              <div>
                <strong>Enjoy savings</strong><br />
                Save up to 50% each month. Cancel anytime.
              </div>
            </div>
          </div>
        );
      case 'Hosting':
        return (
          <div className="content">
            <div className="icon-text">
              <i className="fas fa-money-bill-wave"></i>
              <div>
                <strong>Start earning</strong><br />
                Easily turn unused space into monthly earnings.
              </div>
            </div>
            <div className="icon-text">
              <i className="fas fa-check-circle"></i>
              <div>
                <strong>You're in control</strong><br />
                You approve who rents, and what can be stored.
              </div>
            </div>
            <div className="icon-text">
              <i className="fas fa-shield-alt"></i>
              <div>
                <strong>Peace of mind</strong><br />
                Rest easy with $1M in host liability coverage.
              </div>
            </div>
          </div>
        );
      case 'Business':
        return (
          <div className="content">
            <div className="icon-text">
              <i className="fas fa-chart-line"></i>
              <div>
                <strong>New revenue</strong><br />
                Turn vacant parking and storage space into new revenue.
              </div>
            </div>
            <div className="icon-text">
              <i className="fas fa-cogs"></i>
              <div>
                <strong>Simple operations</strong><br />
                We bring you vetted renters. You check them in.
              </div>
            </div>
            <div className="icon-text">
              <i className="fas fa-wallet"></i>
              <div>
                <strong>Automatic payments</strong><br />
                Receive monthly payments and enterprise reporting.
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="how-it-works">
      <div className="left-section">
        <h1 style={{fontFamily:"Poppins"}}>How Sarkar Space Works</h1>
        <div className="tabs">
          <button className={activeTab === 'Renting' ? 'active' : ''} onClick={() => setActiveTab('Renting')}>
            Renting
          </button>
          <button className={activeTab === 'Hosting' ? 'active' : ''} onClick={() => setActiveTab('Hosting')}>
            Hosting
          </button>
          <button className={activeTab === 'Business' ? 'active' : ''} onClick={() => setActiveTab('Business')}>
            Business
          </button>
        </div>
        {renderContent()}
      </div>
      <div className="right-section">
        {/* Replace with your actual image path */}
        <img src="./parking.jpg" alt="How it works visual" className="how-it-works-image" />
      </div>
    </div>
  );
};

export default HowItWorks;
