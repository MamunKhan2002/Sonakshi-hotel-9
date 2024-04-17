import { initializeApp } from "firebase/app";

// console.log(import.meta.env.VITE_PASS);

const firebaseConfig = {
  apiKey: "AIzaSyCmLyqfo7YPAvAbPJPbE51bW6PNVRQDTcE",
  authDomain: "sonaksi-hotel.firebaseapp.com",
  projectId: "sonaksi-hotel",
  storageBucket: "sonaksi-hotel.appspot.com",
  messagingSenderId: "47214537941",
  appId: "1:47214537941:web:ecf015f2d8b8331f7c865c"
};

const app = initializeApp(firebaseConfig);

export default app;