// src/App.jsx
import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import ProjectsPage from './pages/ProjectsPage';
import MetricsPage from './pages/MetricsPage';
import ReportsPage from './pages/ReportsPage';

function App() {
  const location = useLocation(); // ✅ safe now!

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem', maxWidth: '900px', margin: 'auto' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem' }}>🚀 Alex Taylor MVP</h1>
        <nav style={{ marginBottom: '1rem' }}>
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
              fontWeight: location.pathname === '/reports' ? 'bold' : 'normal',
              textDecoration: location.pathname === '/reports' ? 'underline' : 'none',
            }}
          >
            Reports
          </Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<ProjectsPage />} />
          <Route path="/metrics" element={<MetricsPage />} />
          <Route path="/reports" element={<ReportsPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;