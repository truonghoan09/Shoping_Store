import AppProvider from './provider/AppProvider';
import AppRoutes from './routes/AppRoutes';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import React from 'react';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKpPAi0udLgHwzNvskqfDTf1ZJHp4IpEU",
  authDomain: "test2-e865a.firebaseapp.com",
  projectId: "test2-e865a",
  storageBucket: "test2-e865a.appspot.com",
  messagingSenderId: "980460304561",
  appId: "1:980460304561:web:7c01a330e0262bc6a90a90",
  measurementId: "G-0DTRSSBST8"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const storage = getStorage();

const App : React.FC = () => {
  return (
    <AppProvider>
        <AppRoutes />
    </AppProvider>
  );
}

export default App;
