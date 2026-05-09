import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Globe, Cloud, Code2 } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px', overflow: 'hidden' }}>
      <div className="ambient-glow-1"></div>
      <div className="pattern-bg"></div>
      
      <div className="container">
        <div className="grid-2" style={{ alignItems: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(37, 99, 255, 0.05)', border: '1px solid rgba(37, 99, 255, 0.1)', padding: '0.5rem 1rem', borderRadius: '999px', fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary)', marginBottom: '2rem' }}
            >
              <Code2 size={16} /> Documenting my programming journey
            </motion.div>
            
            <h1 style={{ fontSize: '4.5rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
              Hi, I'm <br />
              <span className="text-gradient">Om Gaikwad</span>
            </h1>
            
            <h2 style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', fontWeight: 500, marginBottom: '2.5rem', maxWidth: '500px' }}>
              Building Intelligent Solutions at the intersection of AI, Web, and Cloud.
            </h2>
            
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem' }}>
              <a href="#projects" className="btn-primary">Explore My Work</a>
              <a href="https://wa.me/918010408739?text=Hello%20Om%20Gaikwad,%20I%20want%20to%20get%20a%20website%20for%20my%20business.%20Can%20I%20get%20the%20details?" target="_blank" rel="noopener noreferrer" className="btn-outline">Contact Me</a>
            </div>

            <div style={{ display: 'flex', gap: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                <BrainCircuit size={20} color="var(--primary)" /> AI
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                <Globe size={20} color="var(--primary)" /> WEB
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                <Cloud size={20} color="var(--primary)" /> CLOUD
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
          >
            {/* The portrait image requested by the user */}
            <div style={{ position: 'relative', width: '100%', maxWidth: '450px' }}>
              <div style={{ position: 'absolute', inset: '-10px', background: 'linear-gradient(135deg, var(--primary), var(--accent))', filter: 'blur(30px)', opacity: 0.15, borderRadius: '50%' }}></div>
              <img 
                src="/new-profile.jpg" 
                alt="Om Gaikwad" 
                style={{ width: '100%', height: 'auto', borderRadius: '24px', position: 'relative', zIndex: 1, border: '1px solid rgba(255,255,255,0.8)', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1)' }} 
                onError={(e) => { e.target.src='/omk.png' }}
              />
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="glass-panel" 
                style={{ position: 'absolute', bottom: '-20px', left: '-30px', padding: '1rem 1.5rem', zIndex: 2, display: 'flex', alignItems: 'center', gap: '1rem' }}
              >
                <div style={{ background: 'rgba(37, 99, 255, 0.1)', padding: '0.75rem', borderRadius: '12px', color: 'var(--primary)' }}>
                  <Code2 size={24} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>Full Stack</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Developer</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
