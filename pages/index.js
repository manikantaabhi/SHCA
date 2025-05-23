import Link from 'next/link';

export default function HomePage() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Welcome to SHCA 🎉</h1>
      <p>This is the homepage after Google login.</p>

      <div style={{ marginTop: '2rem' }}>
        <Link href="/contact">
          <button style={{ padding: '10px 20px', fontSize: '16px' }}>Contact Us</button>
        </Link>
        &nbsp;
        <Link href="/admin">
          <button style={{ padding: '10px 20px', fontSize: '16px' }}>Admin Dashboard</button>
        </Link>
      </div>
    </div>
  );
}
