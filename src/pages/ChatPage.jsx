// src/pages/ChatPage.jsx

import React, { useState, useEffect } from 'react';
import { fetchUserProfile } from '../Services/userProfileService'; // ✅ fetch profile for personalized welcome

function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function loadProfileAndWelcome() {
      try {
        const userData = await fetchUserProfile();
        setProfile(userData);

        // Add the personalized welcome message once the profile is loaded
        setMessages([
          {
            sender: "Alex",
            text: `Hello ${userData.name.split(' ')[0]} 👋🏾! I'm Alex Taylor. How can I assist you today?`
          }
        ]);
      } catch (error) {
        console.error('Failed to load profile for chat:', error);
      }
    }

    loadProfileAndWelcome();
  }, []);

  const handleSend = () => {
    if (input.trim() === "") return;

    // Add user's message
    setMessages(prev => [...prev, { sender: "You", text: input }]);
    setInput("");

    // Simulate Alex's response (placeholder)
    setTimeout(() => {
      setMessages(prev => [...prev, {
        sender: "Alex",
        text: "I'm thinking about your request... 🤔 (soon connected to OpenAI)"
      }]);
    }, 1000);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
      <h2 style={{ marginBottom: '1rem' }}>💬 Chat with Alex Taylor</h2>

      <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem', height: '400px', overflowY: 'auto', backgroundColor: '#f9f9f9', marginBottom: '1rem' }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ marginBottom: '0.75rem', textAlign: msg.sender === "Alex" ? 'left' : 'right' }}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>

      <div style={{ display: 'flex' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          style={{ flex: 1, padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button
          onClick={handleSend}
          style={{ marginLeft: '0.5rem', padding: '0.5rem 1rem', borderRadius: '4px', background: '#4CAF50', color: 'white', border: 'none' }}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatPage;