import React, { useState, useEffect } from 'react';
import { fetchUserProfile } from '../Services/userProfileService'; // ✅ fetch profile

function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // ✅ Pull from .env

  useEffect(() => {
    async function loadProfileAndWelcome() {
      try {
        const userData = await fetchUserProfile();
        setProfile(userData);

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

  const handleSend = async () => {
    if (input.trim() === "") return;

    setMessages(prev => [...prev, { sender: "You", text: input }]);
    const userInput = input;
    setInput("");
    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/chat/ask`, {  // ✅ correct deployed route
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userInput }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessages(prev => [...prev, { sender: "Alex", text: data.reply }]);
      } else {
        setMessages(prev => [...prev, { sender: "Alex", text: "Hmm, I couldn't process your request properly. ❓" }]);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, { sender: "Alex", text: "Network error. Please try again later." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
      <h2 style={{ marginBottom: '1rem' }}>💬 Chat with Alex Taylor</h2>

      <div style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '1rem',
        height: '400px',
        overflowY: 'auto',
        backgroundColor: '#f9f9f9',
        marginBottom: '1rem'
      }}>
        {messages.map((msg, index) => (
          <div key={index} style={{
            marginBottom: '0.75rem',
            textAlign: msg.sender === "Alex" ? 'left' : 'right'
          }}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}

        {loading && (
          <div style={{
            marginBottom: '0.75rem',
            textAlign: 'left',
            fontStyle: 'italic',
            color: 'gray'
          }}>
            Alex is typing...
          </div>
        )}
      </div>

      <div style={{ display: 'flex' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          style={{
            flex: 1,
            padding: '0.5rem',
            borderRadius: '4px',
            border: '1px solid #ccc'
          }}
        />
        <button
          onClick={handleSend}
          style={{
            marginLeft: '0.5rem',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            background: '#4CAF50',
            color: 'white',
            border: 'none'
          }}
          disabled={loading}
        >
          {loading ? '...' : 'Send'}
        </button>
      </div>
    </div>
  );
}

export default ChatPage;