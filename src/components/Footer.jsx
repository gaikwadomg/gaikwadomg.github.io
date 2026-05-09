import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="section-title">Let's <span className="text-gradient">Connect</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>Ready to build something amazing? Let's talk about your next project.</p>
        </div>

        <div className="grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Contact Information</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(37, 99, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Email Me</div>
                  <div style={{ fontWeight: 600 }}>ogaikwad103@gmail.com</div>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(37, 99, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                  <Phone size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Call Me</div>
                  <div style={{ fontWeight: 600 }}>+91 8010408739</div>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(37, 99, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Location</div>
                  <div style={{ fontWeight: 600 }}>Pune, Bhor</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card" style={{ padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Send a Message</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
               <a href="https://wa.me/918010408739?text=Hello%20Om%20Gaikwad,%20I%20want%20to%20get%20a%20website%20for%20my%20business.%20Can%20I%20get%20the%20details?" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ justifyContent: 'center', padding: '1rem' }}>
                 <Send size={18} /> Direct WhatsApp Message
               </a>
               <p style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.875rem', marginTop: '1rem' }}>
                 I usually reply within a few hours. Let's discuss your web development needs!
               </p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div className="logo" style={{ color: 'var(--primary)' }}>
              // OM.DEV
            </div>
            <p>&copy; {new Date().getFullYear()} Om Gaikwad. Crafted with clean code.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
