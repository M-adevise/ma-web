import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDzJTRAy7N_a7a8WibduwCQmkCnSy9boU0',
  authDomain: 'auth-2dff6.firebaseapp.com',
  projectId: 'auth-2dff6',
  storageBucket: 'auth-2dff6.appspot.com',
  messagingSenderId: '751756165494',
  appId: '1:751756165494:web:6b4476258b7545a38bba57',
  measurementId: 'G-BNNB9FGHWE',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
