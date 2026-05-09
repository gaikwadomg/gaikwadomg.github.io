import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ramesh Gupta",
      role: "Small Business Owner",
      text: "The KhataBoost system Om built for me completely transformed how I manage my ledgers. The WhatsApp reminders are a game-changer.",
    },
    {
      name: "Event Organizers",
      role: "Smart Stadium Project",
      text: "The AI companion integration is incredibly smooth. Om demonstrated a deep understanding of modern web capabilities and UX design.",
    },
    {
      name: "Local Advertising Agency",
      role: "Om Publicity",
      text: "Our new website looks stunning and professional. It has already helped us secure new leads. Delivery was on-time and exactly as promised.",
    }
  ];

  return (
    <section id="testimonials" style={{ background: 'var(--bg-gradient)' }}>
      <div className="container">
        <h2 className="section-title" style={{ textAlign: 'center' }}>Client <span className="text-gradient">Feedback</span></h2>
        <p className="section-subtitle" style={{ margin: '0 auto 4rem', textAlign: 'center' }}>What people are saying about my work.</p>
        
        <div className="grid-3">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="glass-panel"
              style={{ padding: '2.5rem', position: 'relative' }}
            >
              <Quote size={40} color="var(--glow-primary)" style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', opacity: 0.5 }} />
              <p style={{ color: 'var(--text-primary)', fontStyle: 'italic', marginBottom: '2rem', position: 'relative', zIndex: 1, lineHeight: 1.8 }}>
                "{test.text}"
              </p>
              <div>
                <h4 style={{ fontWeight: 700, color: 'var(--primary)', marginBottom: '0.2rem' }}>{test.name}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{test.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
