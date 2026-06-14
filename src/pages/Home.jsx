import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Radio, Zap } from 'lucide-react';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>
            We Are <span className="highlight">Roaring Thunders</span>
          </h1>
          <p>
            A dedicated team of Electronics and Communication Engineers from KSIT, Bangalore. 
            Innovating the future of embedded systems, IoT, and high-performance hardware solutions.
          </p>
          <Link to="/team">
            <button className="cta-button">
              Meet The Team <ArrowRight size={20} />
            </button>
          </Link>
        </motion.div>
      </section>

      <section style={{ padding: '4rem 0', display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <motion.div 
          className="team-card" style={{ maxWidth: '300px' }}
          whileHover={{ scale: 1.05 }}
        >
          <Cpu size={48} color="var(--thunder-accent)" style={{ marginBottom: '1rem' }} />
          <h3>Embedded Systems</h3>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Pushing the limits of microcontrollers and low-power processing architecture.</p>
        </motion.div>

        <motion.div 
          className="team-card" style={{ maxWidth: '300px' }}
          whileHover={{ scale: 1.05 }}
        >
          <Radio size={48} color="var(--thunder-accent)" style={{ marginBottom: '1rem' }} />
          <h3>IoT & Communication</h3>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Building robust networks and interconnected devices for smart ecosystems.</p>
        </motion.div>

        <motion.div 
          className="team-card" style={{ maxWidth: '300px' }}
          whileHover={{ scale: 1.05 }}
        >
          <Zap size={48} color="var(--thunder-accent)" style={{ marginBottom: '1rem' }} />
          <h3>Signal Processing</h3>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Advanced algorithms for digital signal and image processing applications.</p>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
