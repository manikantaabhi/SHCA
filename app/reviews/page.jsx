'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ReviewsPage() {
  const [reviews, setReviews] = useState([]);
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  useEffect(() => {
    axios.get(`${baseURL}/api/reviews`)
      .then((res) => setReviews(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>What Our Students & Parents Say</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {reviews.map((rev) => (
          <div key={rev._id} style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h4>{rev.name} – ⭐ {rev.rating}</h4>
            <p>{rev.reviewText}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
