

'use client';

import { useState } from 'react';

export default function Home() {
  const [idea, setIdea] = useState('');
  const [sections, setSections] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSections([]);

    try {
      const res = await fetch('http://localhost:3001/sections', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idea }),
      });

      if (!res.ok) {
        throw new Error('Failed to fetch sections');
      }

      const data = await res.json();
      setSections(data.sections || []);
    } catch (err) {
      setError('Error fetching sections. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{ maxWidth: 600, margin: '2rem auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>Enter your website idea</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          placeholder="Landing page for bakery"
          style={{ width: '100%', padding: 8, fontSize: 16 }}
          required
        />
        <button type="submit" style={{ marginTop: 10, padding: '8px 16px', fontSize: 16 }}>
          {loading ? 'Loading...' : 'Submit'}
        </button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {sections.length > 0 && (
        <>
          <h2 style={{ marginTop: 24 }}>Website Sections Preview:</h2>
          <ul>
            {sections.map((section, i) => (
              <li key={i} style={{ padding: 4 }}>
                {section}
              </li>
            ))}
          </ul>
        </>
      )}
    </main>
  );
}
