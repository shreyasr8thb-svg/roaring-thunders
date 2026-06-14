import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { teamData } from '../data/team';

const Team = () => {
  return (
    <div className="team-container">
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Our Core Team</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          The brilliant minds from KSIT driving innovation in electronics and communication.
        </p>
      </div>

      <div className="team-grid">
        {teamData.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="team-card">
              <div className="member-avatar">
                {member.name.charAt(0)}
              </div>
              <h2 className="member-name">{member.name}</h2>
              <div className="member-role">{member.role}</div>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                {member.institute}
              </p>
              <Link to={`/team/${member.id}`} style={{ width: '100%' }}>
                <button className="view-cv-btn" style={{ width: '100%' }}>
                  View Full CV
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Team;
