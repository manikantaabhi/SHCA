'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const loginEnabled = process.env.NEXT_PUBLIC_ENABLE_LOGIN === 'true';

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    if (!loginEnabled) router.replace('/');
  }, [router]);

  if (!loginEnabled) return null;

  return (
    <div>
      {/* Your login page UI here */}
    </div>
  );
}




// 'use client';

// import { useEffect } from 'react';
// import { auth, provider } from '../../utils/firebase';
// import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';
// import axios from 'axios';
// import { useRouter } from 'next/navigation'; // ✅ correct in App Router

// export default function LoginPage() {
//   const router = useRouter();

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         router.push('/');
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   const handleLogin = async () => {
//     try {
//       const result = await signInWithPopup(auth, provider);
//       const user = result.user;
//       const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
//       console.log("Firebase Google User:", user);

//       await axios.post(`${baseURL}/api/users/add`, {
//         name: user.displayName,
//         email: user.email,
//         image: user.photoURL,
//       });

//       alert('Login successful!');
//       router.push('/');
//     } catch (error) {
//       console.error("Login failed", error);
//       alert('Login failed. Check console for details.');
//     }
//   };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '80px' }}>
//       <h2>Login to SHCA</h2>
//       <button
//         style={{
//           padding: '10px 20px',
//           fontSize: '16px',
//           cursor: 'pointer',
//           backgroundColor: '#4285F4',
//           color: '#fff',
//           border: 'none',
//           borderRadius: '5px'
//         }}
//         onClick={handleLogin}
//       >
//         Sign in with Google
//       </button>
//     </div>
//   );
// }
