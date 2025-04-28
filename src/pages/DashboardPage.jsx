// src/pages/DashboardPage.jsx

import React, { useEffect, useState } from 'react';
import { fetchUserProfile } from '../Services/userProfileService';

function DashboardPage() {
  const [profile, setProfile] = useState(null);
  const [quote, setQuote] = useState("");

  const todaysFocus = [
    "Finalize draft for Affordable Housing project",
    "Respond to key client emails",
    "Health: Take a 30-minute walk"
  ];

  const motivationalQuotes = [
    "Success is the sum of small efforts, repeated day-in and day-out.",
    "Focus on progress, not perfection.",
    "Your future is created by what you do today, not tomorrow.",
    "Discipline today, freedom tomorrow.",
    "Each small step forward matters more than you realize."
  ];

  useEffect(() => {
    async function loadProfileAndQuote() {
      try {
        const userData = await fetchUserProfile();
        setProfile(userData);

        const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
        setQuote(randomQuote);
      } catch (error) {
        console.error('Failed to load dashboard data:', error);
      }
    }

    loadProfileAndQuote();
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

  if (!profile) {
    return <div>Loading dashboard...</div>;
  }

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        👋🏾 {getTimeBasedGreeting()}, {profile.name.split(' ')[0]}!
      </h2>

      {/* Today's Focus Section */}
      <section style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>✅ Today's Key Actions</h3>
        <ul>
          {todaysFocus.map((action, index) => (
            <li key={index} style={{ marginBottom: '0.5rem' }}>
              {action}
            </li>
          ))}
        </ul>
      </section>

      {/* Motivation of the Day Section */}
      <section style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>💬 Motivation of the Day</h3>
        <p style={{ background: '#fff9c4', padding: '1rem', borderRadius: '8px' }}>
          "{quote}"
        </p>
      </section>

      {/* Progress Snapshot Placeholder */}
      <section style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>📊 Progress Snapshot (Coming Soon)</h3>
        <p style={{ background: '#f3e5f5', padding: '1rem', borderRadius: '8px' }}>
          Soon you’ll be able to visualize daily/weekly wins here!
        </p>
      </section>
    </div>
  );
}

export default DashboardPage;