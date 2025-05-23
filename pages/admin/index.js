import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import ProtectedRoute from '../../components/ProtectedRoute';

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

  useEffect(() => {
    axios.get(`${baseURL}/api/admin/stats`)
      .then((res) => setStats(res.data))
      .catch((err) => console.error('Failed to load stats:', err));
  }, []);

  if (!stats) return <p>Loading dashboard...</p>;

  return (
    <ProtectedRoute>
    <div style={{ padding: '2rem' }}>
      <h2>Admin Dashboard</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px',
        marginTop: '1.5rem'
      }}>
        <DashboardCard title="Total Users" value={stats.userCount} link="/users" />
        <DashboardCard title="Total Inquiries" value={stats.inquiryCount} link="/admin/inquiries" />
        <DashboardCard title="Total Reviews" value={stats.reviewCount} link="/reviews" />
      </div>
    </div>
    </ProtectedRoute>
  );
}

function DashboardCard({ title, value, link }) {
  return (
    <Link href={link}>
      <div style={{
        border: '1px solid #ccc',
        padding: '1rem',
        borderRadius: '8px',
        textAlign: 'center',
        cursor: 'pointer',
        backgroundColor: '#f9f9f9',
        transition: '0.2s',
      }}>
        <h3>{title}</h3>
        <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{value}</p>
        <p style={{ fontSize: '14px', color: 'blue' }}>View Details</p>
      </div>
    </Link>
  );
}
