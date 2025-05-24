'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProtectedRoute from '../../../components/ProtectedRoute';

export default function InquiriesPage() {
  const [inquiries, setInquiries] = useState([]);
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  useEffect(() => {
    axios.get(`${baseURL}/api/inquiries`)
      .then((res) => setInquiries(res.data))
      .catch((err) => console.error('Failed to fetch inquiries:', err));
  }, []);

  return (
    <ProtectedRoute>
    <div style={{ padding: '2rem' }}>
      <h2>Inquiries</h2>
      {inquiries.length === 0 ? (
        <p>No inquiries yet.</p>
      ) : (
        inquiries.map((inq) => (
          <div key={inq._id} style={{
            marginBottom: '1.5rem',
            padding: '1rem',
            border: '1px solid #ccc',
            borderRadius: '8px'
          }}>
            <h4>{inq.name}</h4>
            <p><strong>Email:</strong> {inq.email}</p>
            <p><strong>Phone:</strong> {inq.phone}</p>
            <p><strong>Message:</strong> {inq.message}</p>
            <p><small>Submitted: {new Date(inq.createdAt).toLocaleString()}</small></p>
          </div>
        ))
      )}
    </div>
    </ProtectedRoute>
  );
}
