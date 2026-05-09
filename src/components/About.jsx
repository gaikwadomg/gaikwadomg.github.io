import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" style={{ padding: '8rem 0' }}>
      <div className="container">
        <div className="grid-2" style={{ alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">About <span className="text-gradient">Me</span></h2>
            <div style={{ width: '60px', height: '4px', background: 'var(--primary)', borderRadius: '2px', marginBottom: '2rem' }}></div>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: 1.8 }}>
              I am a passionate Full Stack Web Developer based in Pune, dedicated to crafting beautiful, high-performance web applications that solve real-world problems.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: 1.8 }}>
              With a strong foundation in modern web technologies, AI integrations, and cloud infrastructure, I bridge the gap between design and complex technical engineering. My goal is to build intelligent solutions that don't just look stunning, but scale effortlessly.
            </p>
            
            <div className="grid-2" style={{ gap: '1.5rem', marginTop: '3rem' }}>
              <div className="card" style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>15+</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500 }}>Projects Completed</p>
              </div>
              <div className="card" style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>100%</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500 }}>Client Satisfaction</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative' }}
          >
            <div style={{ position: 'absolute', inset: 0, background: 'var(--glow-accent)', filter: 'blur(40px)', transform: 'translate(20px, 20px)', zIndex: -1 }}></div>
            <div className="glass-panel" style={{ padding: '3rem', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, right: 0, width: '150px', height: '150px', background: 'var(--glow-primary)', filter: 'blur(30px)', borderRadius: '50%' }}></div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ display: 'inline-block', width: '10px', height: '10px', background: 'var(--accent)', borderRadius: '50%' }}></span>
                Currently Exploring
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>01</span> Generative AI Integrations
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>02</span> Micro-frontend Architectures
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>03</span> Serverless Cloud Computing
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>04</span> Real-time Data Streaming
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
