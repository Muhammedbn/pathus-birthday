import React from 'react';
import ThreeScene from './components/ThreeScene';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import MusicPlayer from './components/MusicPlayer';
import { motion } from 'framer-motion';

const WishCard = () => (
  <section style={{ padding: '100px 20px', display: 'flex', justifyContent: 'center' }}>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="glass-card"
      style={{
        maxWidth: '800px',
        padding: '60px',
        textAlign: 'center',
        position: 'relative',
        border: '2px solid var(--primary)'
      }}
    >
      <div style={{
        position: 'absolute',
        top: '-30px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'var(--bg-dark)',
        padding: '10px 30px',
        borderRadius: '50px',
        border: '2px solid var(--primary)'
      }}>
        <h3 style={{ color: 'var(--primary)', margin: 0 }}>Special Note</h3>
      </div>
      
      <p style={{
        fontFamily: 'Playfair Display, serif',
        fontSize: '1.8rem',
        lineHeight: '1.6',
        color: '#fff',
        fontStyle: 'italic',
        marginBottom: '30px'
      }}>
        "To my dearest Pathuss, on your 20th birthday. You've grown into such an incredible woman, 
        and I'm the luckiest person to walk this journey by your side. You make every day 
        brighter with your smile. Here's to many more years of love, laughter, and magic together."
      </p>
      
      <div style={{ height: '2px', background: 'var(--primary)', width: '100px', margin: '0 auto 30px' }}></div>
      
      <p style={{ fontWeight: '800', fontSize: '1.2rem', color: 'var(--secondary)' }}>
        With all my love, Always. ❤️
      </p>
    </motion.div>
  </section>
);

const App = () => {
  return (
    <div className="app-container">
      <ThreeScene />
      <MusicPlayer />
      
      <main>
        <Hero />
        <Gallery />
        <WishCard />
      </main>

      <footer style={{
        padding: '60px 20px',
        textAlign: 'center',
        borderTop: '1px solid var(--glass-border)',
        marginTop: '100px',
        color: 'var(--text-muted)'
      }}>
        <p>© 2026 Crafted with ❤️ for Pathuss</p>
      </footer>
    </div>
  );
};

export default App;
