// src/App.jsx

import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import ProjectsPage from './pages/ProjectsPage';
import MetricsPage from './pages/MetricsPage';
import ReportsPage from './pages/ReportsPage';
import DashboardPage from './pages/DashboardPage';
import ChatPage from './pages/ChatPage'; // ✅ New: Import ChatPage
import ContractForm from './components/ContractForm';
import { fetchUserProfile } from './Services/userProfileService'; // ✅ Corrected path

function App() {
  const location = useLocation();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function loadProfile() {
      try {
        const userData = await fetchUserProfile();
        console.log('✅ User Profile loaded:', userData);
        setProfile(userData);
      } catch (error) {
        console.error('Failed to load user profile:', error);
      }
    }
    loadProfile();
  }, []);

  function getTimeBasedGreeting() {
    const now = new Date();
    const hour = now.getHours();

    if (hour < 12) {
      return "Good morning";
    } else if (hour < 18) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  }

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem', maxWidth: '900px', margin: 'auto' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem' }}>🚀 Alex Taylor MVP</h1>

        {/* Personalized Dynamic Greeting */}
        {profile && (
          <div style={{ marginBottom: '1rem', fontSize: '1rem', color: 'gray' }}>
            {getTimeBasedGreeting()}, {profile.name.split(' ')[0]}! 👋🏾 Let's make today count.
          </div>
        )}

        {/* Navigation */}
        <nav style={{ marginBottom: '1rem' }}>
          <Link
            to="/dashboard"
            style={{
              marginRight: '1rem',
              fontWeight: location.pathname === '/dashboard' ? 'bold' : 'normal',
              textDecoration: location.pathname === '/dashboard' ? 'underline' : 'none',
            }}
          >
            Dashboard
          </Link>

          <Link
            to="/"
            style={{
              marginRight: '1rem',
              fontWeight: location.pathname === '/' ? 'bold' : 'normal',
              textDecoration: location.pathname === '/' ? 'underline' : 'none',
            }}
          >
            Projects
          </Link>

          <Link
            to="/metrics"
            style={{
              marginRight: '1rem',
              fontWeight: location.pathname === '/metrics' ? 'bold' : 'normal',
              textDecoration: location.pathname === '/metrics' ? 'underline' : 'none',
            }}
          >
            Metrics
          </Link>

          <Link
            to="/reports"
            style={{
              marginRight: '1rem',
              fontWeight: location.pathname === '/reports' ? 'bold' : 'normal',
              textDecoration: location.pathname === '/reports' ? 'underline' : 'none',
            }}
          >
            Reports
          </Link>

          <Link
            to="/create-contract"
            style={{
              marginRight: '1rem',
              fontWeight: location.pathname === '/create-contract' ? 'bold' : 'normal',
              textDecoration: location.pathname === '/create-contract' ? 'underline' : 'none',
            }}
          >
            Create Contract
          </Link>

          <Link
            to="/chat"
            style={{
              marginLeft: '1rem',
              fontWeight: location.pathname === '/chat' ? 'bold' : 'normal',
              textDecoration: location.pathname === '/chat' ? 'underline' : 'none',
            }}
          >
            Chat
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        <Routes>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/" element={<ProjectsPage />} />
          <Route path="/metrics" element={<MetricsPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/create-contract" element={<ContractForm />} />
          <Route path="/chat" element={<ChatPage />} /> {/* ✅ New Chat route */}
        </Routes>
      </main>
    </div>
  );
}

export default App;