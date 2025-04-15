// src/pages/ProjectsPage.jsx
import React, { useEffect, useState } from 'react';
import api from '../api';

function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("📡 Fetching from:", 'https://alex-taylor-backend-1.onrender.com/api/projects');

    api.get('/projects')
      .then(response => {
        console.log("✅ Fetched Projects:", response.data);
        setProjects(response.data);
        setLoading(false);
      })
      .catch(error => {
        // 🔍 Better error visibility
        if (error.response) {
          // Server responded but with a bad status (e.g. 404, 500)
          console.error("❌ Server Error:", error.response.status, error.response.data);
        } else if (error.request) {
          // No response received
          console.error("❌ No response received:", error.request);
        } else {
          // Something else went wrong
          console.error("❌ Request setup error:", error.message);
        }
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>📁 Projects</h1>
      {loading ? (
        <p>Loading projects...</p>
      ) : projects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        <ul>
          {projects.map(project => (
            <li key={project.id}>
              <strong>{project.name}</strong> — {project.description}
              <br />
              <small>
                📅 {project.start_date} to {project.end_date}
              </small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProjectsPage;