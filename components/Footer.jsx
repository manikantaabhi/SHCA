'use client';
import { useState } from 'react';

export default function Footer() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setForm({ name: '', email: '', phone: '', message: '' });
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
          <p className="text-sm text-gray-300 mb-2">
            Located in Tirupati, SHCA is dedicated to training chess enthusiasts of all ages and skill levels.
          </p>
          <a
            href="https://www.google.com/maps/place/SHCA+7+Hills+Chess+Academy+1+-+Tirupati/@13.6461526,79.4248369,16z/data=!3m1!4b1!4m6!3m5!1s0x3a4d4b25b416e083:0xfd213bc8d5464025!8m2!3d13.6461474!4d79.4274118!16s%2Fg%2F11pzkddh5t?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-yellow-400 hover:underline block mt-2"
          >
            📍 SHCA, 3rd Floor, Uma Pinnacles, Tirumala Bypass Rd, Tirupati
          </a>
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
          <h3 className="text-lg font-semibold mb-3">Enquiry</h3>
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 max-w-full text-gray-900 space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              required
              value={form.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />

            <textarea
              name="message"
              placeholder="Your message"
              required
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />

            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-md transition"
            >
              Send Message
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