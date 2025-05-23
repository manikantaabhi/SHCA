import Link from 'next/link';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';

export default function Navbar() {
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        alert('Logged out successfully');
      })
      .catch((err) => {
        console.error('Logout error:', err);
      });
  };

  return (
    <nav style={{
      padding: '1rem',
      backgroundColor: '#333',
      color: '#fff',
      display: 'flex',
      justifyContent: 'space-around'
    }}>
      <Link href="/">🏠 Home</Link>
      <Link href="/about">About</Link>
      <Link href="/gallery">Gallery</Link>
      <Link href="/reviews">Reviews</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/login">Login</Link>
      <Link href="/admin">Admin</Link>
      <span style={{ cursor: 'pointer' }} onClick={handleLogout}>🚪 Logout</span>
    </nav>
  );
}
