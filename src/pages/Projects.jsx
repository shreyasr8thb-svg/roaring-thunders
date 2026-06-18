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

      <motion.div 
        className="project-card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 15 }}
      >
        <div className="project-header">
          <div>
            <h2 className="project-title">Architecting the Future of Industrial Logistics: Inside the Tumkur AutoConnect Ecosystem</h2>
            <p className="project-subtitle">Enterprise Resource Planning (ERP) and Marketplace Platform</p>
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
            The industrial auto-component sector runs on precision, timing, and reliable human capital. Yet, the systems managing the workers and drivers on the ground are often outdated, fragmented, or entirely paper-based.
          </p>
          <p className="project-intro">
            To bridge this gap, I built the <strong>Tumkur AutoConnect Ecosystem</strong>—a flagship Enterprise Resource Planning (ERP) and Marketplace platform designed specifically for the industrial auto-component sector.
          </p>
          <p className="project-intro">
            Here is a deep dive into how the app works, the architecture powering it, and the features that make it industry-ready.
          </p>

          <div className="project-section">
            <h3><Globe size={24} className="section-icon" /> The Vision: Connecting the Dots</h3>
            <p>Tumkur AutoConnect serves three distinct user roles:</p>
            <ul className="project-list">
              <li><strong>Industry HR/Managers:</strong> Looking to hire vetted talent and track daily factory operations.</li>
              <li><strong>Floor Workers:</strong> Seeking shift work and permanent placements that match their specific skill sets.</li>
              <li><strong>Transport Drivers:</strong> Managing logistics, tracking fleet routes, and logging deliveries.</li>
            </ul>
            <p>The goal was to create a centralized, mobile-first ecosystem where a worker's skills are intelligently matched to factory needs, attendance is verified without manual punch cards, and logistics are tracked in real-time.</p>
          </div>

          <div className="project-section">
            <h3><Database size={24} className="section-icon" /> Under the Hood: An Enterprise-Grade Tech Stack</h3>
            <p>To handle real-time tracking, secure document uploads, and AI-driven logic, the architecture required a robust and scalable tech stack:</p>
            <div className="tech-stack-grid">
              <div className="tech-item">
                <Smartphone size={20} />
                <span><strong>Frontend (Mobile):</strong> React Native (Expo) leveraging Zustand for seamless global state management and React Native Reanimated for 60fps fluid interactions.</span>
              </div>
              <div className="tech-item">
                <Code size={20} />
                <span><strong>Backend API Layer:</strong> Node.js paired with Express, following strict MVC patterns for reliable, standardized JSON responses.</span>
              </div>
              <div className="tech-item">
                <Database size={20} />
                <span><strong>Database:</strong> PostgreSQL managed through the Prisma ORM, providing type-safe database queries and complex relational mapping.</span>
              </div>
            </div>
            
            <h4 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>Infrastructure & Third-Party Integrations:</h4>
            <ul className="project-list">
              <li><strong>AWS S3:</strong> For highly secure, time-expiring document storage.</li>
              <li><strong>Mapbox SDK & Firebase RTDB:</strong> For live geolocation and satellite mapping.</li>
              <li><strong>OpenAI API:</strong> For intelligent, unstructured data parsing.</li>
            </ul>
          </div>

          <div className="project-section">
            <h3><CheckCircle2 size={24} className="section-icon" /> How It Works: Core System Features</h3>
            
            <div className="feature-block">
              <h4>1. AI-Powered Skill Matching</h4>
              <p>Gone are the days of manually sorting through resumes. When a worker updates their profile, the backend utilizes the OpenAI API to parse their raw, unstructured skills and past experience. It cross-references this data against open job descriptions posted by HR, instantly returning a percentage match score and highlighting any critical skill gaps.</p>
            </div>

            <div className="feature-block">
              <h4>2. Geofenced Attendance Logging</h4>
              <p>To ensure operational integrity, the app replaces traditional punch-in systems with smart geofencing. Using the Haversine formula, the backend verifies a worker's or driver's exact GPS coordinates against the factory's target coordinate boundaries. The system enforces a strict 50-meter threshold—meaning a shift can only be logged if the user is physically on-site.</p>
            </div>

            <div className="feature-block">
              <h4>3. Real-Time Fleet Tracking</h4>
              <p>For logistics, the mobile app features a high-performance Mapbox interface utilizing a realistic Satellite-Hybrid visualization layer complete with 3D building extrusions. It fetches live coordinate data from Firebase's Realtime Database to dynamically track vehicle markers, allowing HR to monitor transit routes as they happen.</p>
            </div>

            <div className="feature-block">
              <h4>4. Secure KYC & Document Uploads</h4>
              <p>Handling government IDs and resumes requires top-tier security. Instead of passing files directly through the primary server, the backend integrates with the AWS S3 SDK to generate secure, time-expiring presigned URLs. This allows the mobile client to upload sensitive identification documents directly and safely to cloud storage.</p>
            </div>
          </div>

          <div className="project-section">
            <h3><Smartphone size={24} className="section-icon" /> The Aesthetic: Flagship UI/UX</h3>
            <p>A powerful backend means nothing if the app isn't a joy to use. The mobile frontend was designed with absolute premium polish in mind.</p>
            <p>We implemented a deep dark-mode aesthetic using pure blacks (#000000) contrasted with a vibrant accent red (#ff3b30). Borrowing from modern design principles, the UI heavily features glassmorphism—utilizing frosted glass and blur overlays for top navigation bars and persistent footers. Combined with haptic feedback on physical interactions and skeleton loaders during async data fetches, the app feels native, incredibly fast, and Apple-tier in its execution.</p>
          </div>

          <div className="project-section">
            <h3><Code size={24} className="section-icon" /> The Build Journey</h3>
            <p>Building an enterprise app from scratch is rarely a straight line. Structuring the backend and frontend in a monolithic workspace required strict directory management to ensure Prisma schemas, Firebase initializations, and Node modules communicated perfectly without throwing environment or permission errors. By taking full control of the terminal build process and strictly defining the architecture early on, the ecosystem scaled beautifully.</p>
            <p className="project-conclusion">
              The Tumkur AutoConnect Ecosystem is more than just a marketplace—it is a modernized digital infrastructure for the industrial auto-component workflow.
            </p>
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
