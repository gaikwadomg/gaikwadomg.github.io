import React from 'react';

const Services = () => {
  const servicesList = [
    'Custom Website Development',
    'Business & Portfolio Websites',
    'E-Commerce Solutions',
    'Landing Pages',
    'Website Redesign',
    'Speed Optimization',
    'Maintenance & Support',
    'AI Integration & Automation'
  ];

  return (
    <section id="services" style={{ padding: '4rem 0' }}>
      <div className="container">
        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem', color: 'var(--text-primary)', textTransform: 'uppercase' }}>My Services</h3>
        <div className="services-list">
          {servicesList.map((service, index) => (
            <div key={index} className="service-item">
              <div className="service-check">✓</div>
              <span>{service}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
