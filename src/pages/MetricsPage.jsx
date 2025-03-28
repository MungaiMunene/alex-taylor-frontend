// src/pages/MetricsPage.jsx
import React, { useEffect, useState } from 'react';
import api from '../api';

function MetricsPage() {
  const [metrics, setMetrics] = useState([]);

  useEffect(() => {
    api.get('/metrics/')
      .then(response => setMetrics(response.data))
      .catch(error => console.error('Error fetching metrics:', error));
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h1>📊 Metrics</h1>
      {metrics.length === 0 ? (
        <p>No metrics available.</p>
      ) : (
        <ul>
          {metrics.map(metric => (
            <li key={metric.id}>
              <strong>{metric.name}</strong> — {metric.value} ({metric.category})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MetricsPage;
