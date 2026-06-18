import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Code, Database, Globe, Smartphone, Lock, Map, CheckCircle2, Users } from 'lucide-react';

const Projects = () => {
  return (
    <div className="projects-container">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Our Projects</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          Explore the cutting-edge ecosystems and applications we've built.
        </p>
      </div>

      <motion.div 
        className="project-card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 15 }}
        style={{ marginBottom: '3rem' }}
      >
        <div className="project-header">
          <div>
            <h2 className="project-title">Tumkuru Connect: The Central Hub for Industrial Ecosystems</h2>
            <p className="project-subtitle">Comprehensive Cross-Platform Utility and Community Application</p>
          </div>
          <a 
            href="https://tumkur-autoconnect-web.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="visit-app-btn"
          >
            Visit the App <ArrowUpRight size={20} />
          </a>
        </div>

        <div className="project-content">
          <p className="project-intro">
            <strong>Tumkuru Connect</strong> is designed specifically for the Tumkur region. It acts as a central hub connecting different user groups within a corporate or industrial ecosystem.
          </p>
          <div className="project-section">
            <h3><Users size={24} className="section-icon" /> User Ecosystem</h3>
            <ul className="project-list">
              <li><strong>Workers / General Employees:</strong> For daily tasks, community engagement, and company transit.</li>
              <li><strong>Job Finders:</strong> For external users looking for employment opportunities and applying for roles.</li>
              <li><strong>Drivers:</strong> A dedicated dashboard for managing "Company Bus" routes and ride-hailing (TC Black) operations.</li>
              <li><strong>HR / Company Owners:</strong> An administrative dashboard for managing users, workforce planning, and system oversight.</li>
            </ul>
          </div>

          <div className="project-section">
            <h3><Code size={24} className="section-icon" /> Tech Stack & Architecture</h3>
            <p>Built on a modern JavaScript stack, utilizing a hybrid cross-platform strategy to function as both a Web Application and a Native Android App (TumkuruConnect.apk).</p>
            <div className="tech-stack-grid">
              <div className="tech-item">
                <Smartphone size={20} />
                <span><strong>Core Frameworks:</strong> React 19 & Vite, Vanilla CSS for premium styling, and Lucide React for modern icons.</span>
              </div>
              <div className="tech-item">
                <Globe size={20} />
                <span><strong>Cross-Platform (Capacitor.js):</strong> Wraps the web app into a native Android app, using intelligent permissions (falling back to web APIs if needed) and deep linking.</span>
              </div>
              <div className="tech-item">
                <Database size={20} />
                <span><strong>Backend (Firebase & Vercel):</strong> Firebase for Auth & Firestore. Vercel Serverless Functions for handling secure SMTP email relays and complex backend tasks.</span>
              </div>
            </div>
          </div>

          <div className="project-section">
            <h3><CheckCircle2 size={24} className="section-icon" /> Key Features & Technical Implementations</h3>
            
            <div className="feature-block">
              <h4>1. Advanced Mobility: The "TC Black" Ride-Hailing Engine</h4>
              <p>Features a fully-featured Uber-like engine. Built with a custom Leaflet.js map interface, smart routing via OpenStreetMap API, and dynamic pricing across multiple vehicle tiers. Real-time Firebase listeners wait for driver acceptance, generate OTPs, and enable in-app WebRTC calls.</p>
            </div>

            <div className="feature-block">
              <h4>2. Company Transit Tracking</h4>
              <p>Executes real-time Firestore queries to find online drivers operating the "Company Bus." It displays their live location and pickup/dropoff shift times directly on the map.</p>
            </div>

            <div className="feature-block">
              <h4>3. HR Administration & AI Leave Predictor</h4>
              <p>Provides advanced workforce management tools, including a 14-day Workforce Risk Heatmap to predict worker absenteeism, Contextual AI Predictions for specific dates, and systematic Reason Tracking to help HR plan proactively.</p>
            </div>

            <div className="feature-block">
              <h4>4. Intelligent Geolocation Engine</h4>
              <p>An always-on geolocation watcher powered by Capacitor that handles GPS coordinate fetching with graceful degradation, automatically falling back to a hardcoded Tumkur coordinate if signal drops, preventing app crashes.</p>
            </div>

            <div className="feature-block">
              <h4>5. Communication & Security Hub</h4>
              <p>Includes a Community Feed, direct messaging (ChatBox), and a dedicated SOS feature triggering native emergency calls (112). Automated security emails alert users of sign-ins and profile changes, plus integrated QR scanning for IDs.</p>
            </div>

            <div className="feature-block">
              <h4>6. Automated App Updates (Over-The-Air)</h4>
              <p>On startup, it checks a version JSON endpoint hosted on Vercel. If an update is available, it triggers a native local push notification prompting the user to download the latest APK directly from the web, bypassing the need for an app store.</p>
            </div>
          </div>
        </div>

        <div className="project-footer">
          Designed and crafted by Roaring Thunders with ❤️
        </div>
      </motion.div>


    </div>
  );
};

export default Projects;
