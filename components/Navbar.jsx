"use client";

import Link from 'next/link';
import { useState } from 'react';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, loading } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    signOut(auth)
      .then(() => alert('Logged out successfully'))
      .catch((err) => console.error('Logout error:', err));
  };

  if (loading) return null;

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50 px-6 py-4 relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-lg font-bold">♟ SHCA</Link>

        {/* Hamburger Toggle */}
        <div
          className="block md:hidden text-2xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-10 items-center">
          <NavLinks user={user} handleLogout={handleLogout} />
        </div>
      </div>

      {/* Mobile Nav */}
{isOpen && (
  <div className="absolute top-full left-0 w-full bg-gray-900 shadow-lg flex flex-col items-center space-y-4 py-4 z-40">
    <NavLinks user={user} handleLogout={handleLogout} toggle={() => setIsOpen(false)} />
  </div>
)}

    </nav>
  );
}

function NavLinks({ user, handleLogout, toggle }) {
  const linkClass = "hover:text-yellow-400 transition-colors";

  return (
    <>
      <Link href="/" className={linkClass} onClick={toggle}>Home</Link>
      <Link href="/about" className={linkClass} onClick={toggle}>About</Link>
      <Link href="/gallery" className={linkClass} onClick={toggle}>Gallery</Link>
      <Link href="/reviews" className={linkClass} onClick={toggle}>Reviews</Link>
      <Link href="/contact" className={linkClass} onClick={toggle}>Contact</Link>
      {!user && <Link href="/login" className={linkClass} onClick={toggle}>Login</Link>}
      {user && <Link href="/admin" className={linkClass} onClick={toggle}>Admin</Link>}
      {user && (
        <span onClick={() => { handleLogout(); if (toggle) toggle(); }} className={`cursor-pointer ${linkClass}`}>
          Logout
        </span>
      )}
    </>
  );
}
