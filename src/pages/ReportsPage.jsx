// src/pages/ReportsPage.jsx
import React, { useEffect, useState } from 'react';
import api from '../api';

function ReportsPage() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    api.get('/reports/')
      .then(response => setReports(response.data))
      .catch(error => console.error('Error fetching reports:', error));
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h1>📊 Reports</h1>
      {reports.length === 0 ? (
        <p>No reports available.</p>
      ) : (
        <ul>
          {reports.map(report => (
            <li key={report.id}>
              <strong>{report.title}</strong>
              <p>{report.content}</p>
              <small>Project ID: {report.project_id}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ReportsPage;