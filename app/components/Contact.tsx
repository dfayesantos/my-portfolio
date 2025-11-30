"use client";
import React, { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [website, setWebsite] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');
    setError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, website }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Failed to send');

      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err: unknown) {
      setStatus('error');
      const message = err instanceof Error ? err.message : String(err);
      setError(message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="mt-32 max-w-5xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* LEFT COLUMN — TEXT */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch!</h2>
          <p className="text-slate-700 leading-relaxed">
            If you would like to contact me about my past or current work, or find out how I can 
            help your business, please fill out the form. I will get back to you shortly. Thank you!
          </p>
        </div>

        {/* RIGHT COLUMN — FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">NAME *</label>
              <input
                value={name}
                onChange={e => setName(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-slate-200"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">EMAIL *</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-slate-200"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">MESSAGE *</label>
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              maxLength={2000}
              rows={8}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-slate-200"
              required
            />
            <p className="text-xs text-slate-500 mt-1">
              {message.length}/2000 characters
            </p>
          </div>

          {/* Honeypot */}
          <div
            style={{
              position: 'absolute',
              left: '-9999px',
              width: '1px',
              height: '1px',
              overflow: 'hidden',
            }}
            aria-hidden="true"
          >
            <label>Website</label>
            <input
              name="website"
              value={website}
              onChange={e => setWebsite(e.target.value)}
              autoComplete="off"
              tabIndex={-1}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center px-4 py-2 bg-slate-900 text-white rounded-md hover:bg-slate-800 transition"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>

          {status === 'success' && (
            <p className="text-green-600">Message sent. Thank you!</p>
          )}
          {status === 'error' && (
            <p className="text-red-600">Error sending message: {error}</p>
          )}
        </form>
      </div>
    </section>
  );
}
