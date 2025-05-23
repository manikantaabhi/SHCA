import { useState } from 'react';
import axios from 'axios';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/inquiries/add', form);
      alert('Your message has been sent!');
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      console.error(err);
      alert('Something went wrong');
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your name" required value={form.name} onChange={handleChange} /><br /><br />
        <input type="email" name="email" placeholder="Your email" required value={form.email} onChange={handleChange} /><br /><br />
        <input type="text" name="phone" placeholder="Phone number" required value={form.phone} onChange={handleChange} /><br /><br />
        <textarea name="message" placeholder="Your message" required rows={4} value={form.message} onChange={handleChange} /><br /><br />
        <button type="submit">Send Message</button>
      </form>
     
<div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
  <a href="tel:+917794812214">
    <button style={{ padding: '10px 20px' }}>📞 Call Now</button>
  </a>
  <a href="https://wa.me/+917794812214" target="_blank">
    <button style={{ padding: '10px 20px', backgroundColor: '#25D366', color: '#fff' }}>
      💬 WhatsApp
    </button>
  </a>
</div>

      <hr style={{ margin: '2rem 0' }} />

<h3>Visit Us</h3>
<h4>Head Branch</h4>
<p>7 Hills Chess Academy, Tirupati<br />Andhra Pradesh, India</p>

<div style={{ marginTop: '1rem' }}>
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7754.381670846868!2d79.42483687516176!3d13.646152599730602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4b25b416e083%3A0xfd213bc8d5464025!2sSHCA%207%20Hills%20Chess%20Academy%201%20-%20Tirupati!5e0!3m2!1sen!2sus!4v1748012595055!5m2!1sen!2sus"
  width="600"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade">
</iframe>
</div>

<h4>Branch-2</h4>
<p>7 Hills Chess Academy, Tirupati<br />Andhra Pradesh, India</p>

<div style={{ marginTop: '1rem' }}>
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.561436334201!2d79.42106667516147!3d13.623576200249184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4b7bddb7a5ef%3A0xe246f472f6bba249!2sSHCA%207%20Hills%20chess%20academy%202%20-%20Tirupati!5e0!3m2!1sen!2sus!4v1748012843917!5m2!1sen!2sus"
  width="600"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade">
</iframe>
</div>


    </div>
    
  );
}




