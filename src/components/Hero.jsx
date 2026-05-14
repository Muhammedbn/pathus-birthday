import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, Stars, Gift } from 'lucide-react';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const target = new Date("May 15, 2026 00:00:00").getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        secs: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSurprise = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  };

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '20px',
      position: 'relative'
    }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <span style={{ 
          color: 'var(--primary)', 
          fontWeight: '800', 
          letterSpacing: '4px', 
          textTransform: 'uppercase',
          fontSize: '1rem',
          display: 'block',
          marginBottom: '10px'
        }}>
          Celebrating 20 Years of Pathuss
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: "spring" }}
        style={{
          fontSize: 'clamp(3rem, 10vw, 7rem)',
          lineHeight: '1.1',
          marginBottom: '30px',
          fontWeight: '800'
        }}
        className="text-gradient"
      >
        Happy Birthday<br />Pathuss
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        style={{ marginBottom: '40px' }}
      >
        <p style={{ fontSize: '1.5rem', color: 'var(--text-muted)', maxWidth: '600px' }}>
          May 15th, 2006 marked the day an angel was born. 
          To my wonderful wife, you are the magic in my life.
        </p>
      </motion.div>

      <div style={{ display: 'flex', gap: '20px', marginBottom: '50px' }}>
        {Object.entries(timeLeft).map(([label, value]) => (
          <div key={label} className="glass-card" style={{ padding: '15px 25px', minWidth: '100px' }}>
            <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--primary)' }}>{value}</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>{label}</div>
          </div>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleSurprise}
        className="btn-premium"
        style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
      >
        <Gift size={20} /> Click for a Surprise
      </motion.button>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ position: 'absolute', bottom: '40px', color: 'var(--text-muted)' }}
      >
        <p style={{ fontSize: '0.9rem' }}>Scroll to see our memories</p>
        <div style={{ fontSize: '1.5rem' }}>↓</div>
      </motion.div>
    </section>
  );
};

export default Hero;
