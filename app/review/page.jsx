'use client'
import { useState } from 'react';
import axios from 'axios';

export default function ReviewFormPage() {
  const [name, setName] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(5);
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${baseURL}/api/reviews/add`, {
        name,
        reviewText,
        rating,
      });
      alert('Review submitted!');
      setName('');
      setReviewText('');
      setRating(5);
    } catch (err) {
      console.error(err);
      alert('Failed to submit review.');
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
      <h2>Leave a Review</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        /><br /><br />
        <textarea
          placeholder="Your feedback"
          value={reviewText}
          required
          onChange={(e) => setReviewText(e.target.value)}
          rows={4}
        /><br /><br />
        <label>Rating: </label>
        <select value={rating} onChange={(e) => setRating(e.target.value)}>
          {[1,2,3,4,5].map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select><br /><br />
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}
