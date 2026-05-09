import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo">
          <span style={{ color: 'var(--primary)' }}>//</span> OM.DEV
        </div>
        
        <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <a href="#about" className="nav-link" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" className="nav-link" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#experience" className="nav-link" onClick={() => setMenuOpen(false)}>Journey</a>
          <a href="#projects" className="nav-link" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#testimonials" className="nav-link" onClick={() => setMenuOpen(false)}>Testimonials</a>
        </nav>
        
        <a href="#contact" className="btn-primary header-cta">
          Let's Talk
        </a>
      </div>
    </header>
  );
};

export default Header;
