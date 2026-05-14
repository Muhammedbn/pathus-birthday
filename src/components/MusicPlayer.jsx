import React, { useState, useRef, useEffect } from 'react';
import { Music, Play, Pause, Volume2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Using a royalty-free soft ambient birthday track link
  const audioUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"; // Placeholder

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-player-container" style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 100 }}>
      <audio ref={audioRef} src={audioUrl} loop />
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={togglePlay}
        className="glass-card"
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          border: '2px solid var(--primary)',
          cursor: 'pointer'
        }}
      >
        {isPlaying ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <Pause size={24} />
          </motion.div>
        ) : (
          <Play size={24} />
        )}
      </motion.button>

      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: -10 }}
            exit={{ opacity: 0, x: 20 }}
            className="glass-card"
            style={{
              position: 'absolute',
              right: '70px',
              top: '10px',
              padding: '8px 16px',
              whiteSpace: 'nowrap',
              fontSize: '0.9rem',
              color: 'var(--primary)',
              fontWeight: '600'
            }}
          >
            Playing Magic... ✨
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MusicPlayer;
