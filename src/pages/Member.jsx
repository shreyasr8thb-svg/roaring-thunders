import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { teamData } from '../data/team';
import { ArrowLeft, Briefcase, GraduationCap, Mail, Phone, Code } from 'lucide-react';

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
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/team" className="back-btn">
        <ArrowLeft size={20} /> Back to Team
      </Link>

      <div className="cv-header">
        <div className="cv-avatar">
          {member.name.charAt(0)}
        </div>
        <div className="cv-title">
          <h1>{member.name}</h1>
          <p>{member.role} | {member.institute}</p>
          <div className="cv-contact">
            <div className="cv-contact-item">
              <Mail size={16} /> {member.email}
            </div>
            <div className="cv-contact-item">
              <Phone size={16} /> {member.phone}
            </div>
          </div>
        </div>
      </div>

      <div className="cv-section">
        <h2>About Me</h2>
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

      <div className="cv-section">
        <h2><Briefcase size={24} /> Key Projects</h2>
        <div className="timeline">
          {member.projects.map((proj, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-title">{proj.title}</div>
              <div className="timeline-subtitle">{proj.period}</div>
              <div className="timeline-desc">{proj.description}</div>
            </div>
          ))}
        </div>
      </div>

    </motion.div>
  );
};

export default Member;
