// src/components/Navigation.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav style={{ padding: '1rem', background: '#f4f4f4', borderBottom: '1px solid #ccc' }}>
      <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
        <li style={{ marginRight: '20px' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Projects</Link>
        </li>
        <li style={{ marginRight: '20px' }}>
          <Link to="/metrics" style={{ textDecoration: 'none', color: 'black' }}>Metrics</Link>
        </li>
        <li>
          <Link to="/reports" style={{ textDecoration: 'none', color: 'black' }}>Reports</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;