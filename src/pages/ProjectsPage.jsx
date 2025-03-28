// src/pages/ProjectsPage.jsx
import React, { useEffect, useState } from 'react';
import api from '../api';

function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/api/projects')
      .then(response => {
        setProjects(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
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
