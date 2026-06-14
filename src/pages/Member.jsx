import React, { useEffect, useState } from 'react';
import { useParams, Link as RouterLink, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { teamData } from '../data/team';
import { ArrowLeft, GraduationCap, Mail, Phone, Code, MapPin, Link } from 'lucide-react';

const Member = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [member, setMember] = useState(null);

  useEffect(() => {
    const foundMember = teamData.find(m => m.id === id);
    if (foundMember) {
      setMember(foundMember);
    } else {
      navigate('/team');
    }
  }, [id, navigate]);

  if (!member) return null;

  return (
    <motion.div 
      className="cv-container"
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 90, damping: 20 }}
    >
      <RouterLink to="/team" className="back-btn">
        <ArrowLeft size={20} /> Back to Team
      </RouterLink>

      <div className="cv-header">
        <div className="cv-avatar" style={{ overflow: 'hidden' }}>
          {member.photo ? (
            <img 
              src={member.photo} 
              alt={member.name} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
            />
          ) : null}
          <div style={{ display: member.photo ? 'none' : 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
            {member.name.charAt(0)}
          </div>
        </div>
        <div className="cv-title">
          <h1>{member.name}</h1>
          <p>{member.role} | {member.institute}</p>
          <div className="cv-contact">
            {member.email && (
              <a href={`mailto:${member.email}`} className="cv-contact-item">
                <Mail size={16} /> {member.email}
              </a>
            )}
            {member.phone && (
              <a href={`tel:${member.phone}`} className="cv-contact-item">
                <Phone size={16} /> {member.phone}
              </a>
            )}
            {member.linkedin && member.linkedin !== "https://linkedin.com/in/" && (
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="cv-contact-item">
                <Link size={16} /> LinkedIn
              </a>
            )}
            {member.location && (
              <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(member.location)}`} target="_blank" rel="noopener noreferrer" className="cv-contact-item">
                <MapPin size={16} /> {member.location}
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="cv-section">
        <h2>About</h2>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{member.about}</p>
      </div>

      <div className="cv-section">
        <h2><Code size={24} /> Technical Skills</h2>
        <div className="skill-tags">
          {member.skills.map(skill => (
            <span key={skill} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>

      <div className="cv-section">
        <h2><GraduationCap size={24} /> Education</h2>
        <div className="timeline">
          {member.education.map((edu, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-title">{edu.degree}</div>
              <div className="timeline-subtitle">{edu.institution} | {edu.period}</div>
              <div className="timeline-desc">{edu.description}</div>
            </div>
          ))}
        </div>
      </div>

    </motion.div>
  );
};

export default Member;
