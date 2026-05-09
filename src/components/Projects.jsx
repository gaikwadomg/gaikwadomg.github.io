import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projectsData = [
  {
    title: 'Matdata Mitra',
    subtitle: 'Voter Awareness Platform',
    desc: 'Interactive multilingual platform designed to simplify voter awareness and election guidance.',
    link: 'https://matdata-mitra-410375920764.asia-south1.run.app/',
    tags: ['React', 'Firebase', 'Tailwind'],
    image: '/matdata.png'
  },
  {
    title: 'Om Publicity',
    subtitle: 'Corporate Website',
    desc: 'Professional business website for an outdoor advertising agency with modern branding and lead generation.',
    link: 'https://ompublicity.in/',
    tags: ['Next.js', 'Framer Motion'],
    image: '/ompublicity.png'
  },
  {
    title: 'KhataBoost',
    subtitle: 'Digital Khata Management',
    desc: 'Smart digital ledger platform for small businesses with WhatsApp reminders and financial tracking.',
    link: 'https://khatabooste.vercel.app/',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: '/khataboost.png'
  },
  {
    title: 'Smart Stadium',
    subtitle: 'AI-Powered Event Experience',
    desc: 'Modern AI-based event platform focused on navigation, live assistance, and smart stadium experiences.',
    link: 'https://physical-event-experience-731791825163.us-central1.run.app/',
    tags: ['Three.js', 'AI Integration', 'GCP'],
    image: '/smartstadium.png'
  },
  {
    title: 'VillageStay',
    subtitle: 'Rural Tourism Marketplace',
    desc: 'Platform connecting travelers with authentic rural tourism experiences and local homestays.',
    link: 'https://villagestay01.netlify.app/#host',
    tags: ['React', 'Maps API', 'Netlify'],
    image: '/villagestay.png'
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>A selection of my recent work in web development.</p>
        </div>
        
        <div className="grid-3">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="card"
              style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden', padding: '0.5rem' }}
            >
              <div style={{ background: 'var(--bg-gradient)', height: '200px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }} 
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.25rem' }}>{project.title}</h3>
                <p style={{ color: 'var(--primary)', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1rem' }}>{project.subtitle}</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem', flexGrow: 1 }}>{project.desc}</p>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {project.tags.map((tag, i) => (
                    <span key={i} style={{ background: '#f1f5f9', color: '#475569', fontSize: '0.75rem', padding: '0.25rem 0.5rem', borderRadius: '4px', fontWeight: 500 }}>{tag}</span>
                  ))}
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--primary)', fontSize: '0.875rem', fontWeight: 600, transition: 'gap 0.2s' }} onMouseOver={(e) => e.currentTarget.style.gap='0.5rem'} onMouseOut={(e) => e.currentTarget.style.gap='0.25rem'}>
                    Live Preview <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

