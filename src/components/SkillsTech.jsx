import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Server, Cpu, Globe2, Cloud, Terminal } from 'lucide-react';

const SkillsTech = () => {
  const skills = [
    { name: 'Frontend React', icon: <Layout /> },
    { name: 'Backend Node.js', icon: <Server /> },
    { name: 'Database Architecture', icon: <Database /> },
    { name: 'Cloud Deployment', icon: <Cloud /> },
    { name: 'API Development', icon: <Globe2 /> },
    { name: 'AI Integration', icon: <Cpu /> },
    { name: 'UI/UX Implementation', icon: <Code2 /> },
    { name: 'DevOps & CI/CD', icon: <Terminal /> },
  ];

  return (
    <section id="skills" style={{ background: 'var(--bg-color)', position: 'relative' }}>
      <div className="ambient-glow-2"></div>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="section-title">Technical <span className="text-gradient">Arsenal</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>A comprehensive toolkit for building robust, scalable web applications.</p>
        </div>
        
        <div className="grid-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="card"
              style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem' }}
            >
              <div style={{ width: '60px', height: '60px', background: 'rgba(37, 99, 255, 0.05)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                {skill.icon}
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsTech;
