'use client'; // add this if you're using Next.js App Router

import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setEmail('');
        setMessage('');
      } else {
        setStatus("❌ Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ An error occurred.");
    }
  };

  return (
    <footer className="bg-gray-900 text-white px-6 py-10 mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Academy Info */}
        <div>
          <h2 className="text-xl font-semibold mb-2">7 Hills Chess Academy</h2>
          <p className="text-sm text-gray-300">
            Located in Tirupati, SHCA is dedicated to training chess enthusiasts of all ages and skill levels. Join us and elevate your game!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/courses" className="hover:underline">Courses</a></li>
            <li><a href="/events" className="hover:underline">Upcoming Events</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact / Enquiry */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact & Enquiry</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="px-3 py-2 rounded bg-gray-800 border border-gray-700 text-sm"
            />
            <textarea
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
              rows={3}
              className="px-3 py-2 rounded bg-gray-800 border border-gray-700 text-sm"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded text-sm"
            >
              Send Enquiry
            </button>
            {status && <p className="text-xs mt-2 text-green-400">{status}</p>}
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-xs text-gray-500 mt-10">
        © 2025 SHCA – 7 Hills Chess Academy, Tirupati. All rights reserved.
      </div>
    </footer>
  );
}
