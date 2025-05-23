import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyA_GjcmLf2nIsWc4H-Ms_ASXJGWyuuAXpg",
  authDomain: "shca-9fa15.firebaseapp.com",
  projectId: "shca-9fa15",
  storageBucket: "shca-9fa15.firebasestorage.app",
  messagingSenderId: "561459753215",
  appId: "1:561459753215:web:71bb6c0056047b20701cca",
  measurementId: "G-XKPR726BHK"
};

const app = initializeApp(firebaseConfig);

// ✅ Safe Analytics Initialization
let analytics = null;
if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, auth, provider };
