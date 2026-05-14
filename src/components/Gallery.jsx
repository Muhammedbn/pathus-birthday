import React from 'react';
import { motion } from 'framer-motion';

const memories = [
  { id: 1, src: '/assets/memory1.png', title: 'Eternal Radiance' },
  { id: 2, src: '/assets/cake.png', title: 'The Sweetest Celebration' },
  // Adding placeholders for more
  { id: 3, src: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&auto=format&fit=crop&q=60', title: 'Sparkling Moments' },
  { id: 4, src: 'https://images.unsplash.com/photo-1530103043960-ef38714abb15?w=800&auto=format&fit=crop&q=60', title: 'Golden Memories' }
];

const Gallery = () => {
  return (
    <section id="gallery" style={{ padding: '100px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: '60px' }}
      >
        <h2 style={{ fontSize: '3.5rem', marginBottom: '20px' }} className="text-gradient">Memory Lane</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>Every moment with you is a treasure.</p>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '30px',
        padding: '20px'
      }}>
        {memories.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass-card"
            style={{
              overflow: 'hidden',
              height: '400px',
              position: 'relative'
            }}
          >
            <img 
              src={photo.src} 
              alt={photo.title} 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.5s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '20px',
              background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
              color: 'white'
            }}>
              <h3 style={{ fontSize: '1.2rem' }}>{photo.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
