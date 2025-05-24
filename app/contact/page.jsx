'use client';
import { useState } from 'react';
import axios from 'axios';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${baseURL}/api/inquiries/add`, form);
      alert('Your message has been sent!');
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      console.error(err);
      alert('Something went wrong');
    }
  };

  return (
    <div className="px-4 py-12 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto space-y-4"
      >
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
      </form>

      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
        <a href="tel:+917794812214">
          <button className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition">
            📞 Call Now
          </button>
        </a>
        <a href="https://wa.me/+917794812214" target="_blank">
          <button className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
            💬 WhatsApp
          </button>
        </a>
      </div>

      <hr className="my-12 border-gray-300" />

      <h3 className="text-2xl font-semibold mb-4">Visit Us</h3>

      {/* Head Branch */}
      <div className="mb-12">
        <h4 className="text-lg font-semibold">Head Branch</h4>
        <p className="mb-4">
          7 Hills Chess Academy, Tirupati<br />
          Andhra Pradesh, India
        </p>
        <div className="w-full h-64 sm:h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7754.381670846868!2d79.42483687516176!3d13.646152599730602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4b25b416e083%3A0xfd213bc8d5464025!2sSHCA%207%20Hills%20Chess%20Academy%201%20-%20Tirupati!5e0!3m2!1sen!2sus!4v1748012595055!5m2!1sen!2sus"
            className="w-full h-full rounded-lg"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Branch 2 */}
      <div>
        <h4 className="text-lg font-semibold">Branch-2</h4>
        <p className="mb-4">
          7 Hills Chess Academy, Tirupati<br />
          Andhra Pradesh, India
        </p>
        <div className="w-full h-64 sm:h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.561436334201!2d79.42106667516147!3d13.623576200249184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4b7bddb7a5ef%3A0xe246f472f6bba249!2sSHCA%207%20Hills%20chess%20academy%202%20-%20Tirupati!5e0!3m2!1sen!2sus!4v1748012843917!5m2!1sen!2sus"
            className="w-full h-full rounded-lg"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
