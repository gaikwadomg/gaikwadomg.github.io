import React from 'react';

const Offer = () => {
  return (
    <section id="offer" className="offer-section container">
      <div className="offer-card">
        <div className="offer-badge">Limited Time Special Offer</div>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontFamily: 'Outfit, sans-serif' }}>Basic Static Website</h2>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', gap: '1rem' }}>
          <span style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', textDecoration: 'line-through' }}>₹2999</span>
          <div className="text-gradient offer-price">₹1499 <span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>Only</span></div>
        </div>
        
        <div style={{ margin: '2rem 0', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
           <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.5rem 1rem', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
             <span style={{ color: 'var(--accent)' }}>✓</span> .in Domain Included
           </div>
           <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.5rem 1rem', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
             <span style={{ color: 'var(--accent)' }}>✓</span> Free Hosting
           </div>
           <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.5rem 1rem', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
             <span style={{ color: 'var(--accent)' }}>✓</span> Clean & Responsive Design
           </div>
        </div>
        
        <div style={{ color: '#ef4444', fontWeight: 600, marginBottom: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
          <span>⏰</span> Valid for the first 10 clients only!
        </div>
        
        <a href="https://wa.me/918010408739?text=Hello%20Om%20Gaikwad%2C%20I%20am%20interested%20in%20your%20Special%20Offer%20of%20Rs.1499%20website!" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '1.25rem', padding: '1rem 2.5rem' }}>
          Claim Offer Now
        </a>
      </div>
    </section>
  );
};

export default Offer;
