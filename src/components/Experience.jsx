import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      role: 'Full Stack Developer',
      company: 'Freelance / Self-Employed',
      period: '2022 - Present',
      desc: 'Building custom web applications, business websites, and SaaS platforms. Specializing in React, Node.js, and Cloud deployments. Completed over 15 distinct projects ranging from digital khata ledgers to AI event companions.',
    },
    {
      role: 'BCA (Bachelor of Computer Applications)',
      company: 'Pune University (Sinhgad College of Science)',
      period: '2022 - 2025',
      desc: 'Achieved a CGPA of 8.99. Deepened knowledge in data structures, algorithms, web development architectures, and software engineering principles.',
    },
    {
      role: 'Microsoft Internship',
      company: 'AICTE',
      period: 'Completed',
      desc: 'Gained hands-on experience in cloud environments, enterprise software practices, and modern deployment pipelines.',
    }
  ];

  return (
    <section id="experience" style={{ padding: '8rem 0' }}>
      <div className="container">
        <h2 className="section-title text-center" style={{ textAlign: 'center' }}>The <span className="text-gradient">Journey</span></h2>
        <p className="section-subtitle" style={{ margin: '0 auto 4rem', textAlign: 'center' }}>My professional and educational timeline.</p>
        
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          {/* Timeline Line */}
          <div style={{ position: 'absolute', top: 0, bottom: 0, left: '24px', width: '2px', background: 'var(--glass-border)', zIndex: 0 }}></div>
          
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              style={{ display: 'flex', gap: '2rem', marginBottom: '3rem', position: 'relative', zIndex: 1 }}
            >
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'white', border: '2px solid var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 0 15px rgba(37, 99, 255, 0.2)' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--primary)' }}></div>
              </div>
              
              <div className="card" style={{ padding: '2rem', width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>{exp.role}</h3>
                    <p style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem' }}>{exp.company}</p>
                  </div>
                  <span style={{ background: 'rgba(37, 99, 255, 0.05)', color: 'var(--text-secondary)', padding: '0.3rem 0.8rem', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 600 }}>{exp.period}</span>
                </div>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
