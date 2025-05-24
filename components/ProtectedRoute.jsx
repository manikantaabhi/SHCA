
"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [loading, user]);

  // 🛑 Don't render anything until loading is done
  if (loading) return <p>Loading...</p>;

  // 🔐 Only render children if user is authenticated
  return user ? children : null;
}
