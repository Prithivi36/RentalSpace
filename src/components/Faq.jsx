import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const faqs = [
    {
      question: 'What is SarkarSpace?',
      answer: 'SarkarSpace is a platform that connects people looking for parking spots with hosts who have unused parking space to rent.'
    },
    {
      question: 'How do I find parking space near me?',
      answer: 'You can easily search for available parking spaces by entering your location on our platform and browsing the results based on availability and price.'
    },
    {
      question: 'Can I cancel my booking?',
      answer: 'Yes, you can cancel your booking at any time through your account dashboard. Cancellation policies may apply based on the time of cancellation.'
    },
    {
      question: 'Is SarkarSpace safe?',
      answer: 'Yes, SarkarSpace provides a safe and secure platform. Hosts and renters are verified, and all transactions are protected with security measures.'
    },
    {
      question: 'How do I become a host?',
      answer: 'To become a host, you can sign up on SarkarSpace, list your available parking space, and start earning money by renting it out.'
    }
  ];

  return (
    <div className="faq-section">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span>{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
