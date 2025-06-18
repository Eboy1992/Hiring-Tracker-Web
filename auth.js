import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

// ✅ Correct modular Firebase initialization
const firebaseConfig = {
  apiKey: "AIzaSyDk7WrViUEWC8BnU3D56V8fh16WzN2HxNc",
  authDomain: "hiringapp-88906.firebaseapp.com",
  projectId: "hiringapp-88906",
  storageBucket: "hiringapp-88906.firebasestorage.app",
  messagingSenderId: "642206725142",
  appId: "1:642206725142:web:68eb389dab614e19df7137",
  measurementId: "G-1K0F39SMCS"
};

// ✅ Modular initialization
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ✅ Modular login
document.getElementById("login-btn")?.addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      document.getElementById("login-section").classList.add("hidden");
      document.getElementById("dashboard-section").classList.remove("hidden");
    })
    .catch((error) => {
      alert("Login failed: " + error.message);
      document.getElementById("login-error").classList.remove("hidden");
    });
});

// ✅ Modular logout
document.getElementById("logout-btn")?.addEventListener("click", () => {
  signOut(auth).then(() => {
    document.getElementById("dashboard-section").classList.add("hidden");
    document.getElementById("login-section").classList.remove("hidden");
  });
});

// ✅ Modular auth state change
onAuthStateChanged(auth, (user) => {
  if (user) {
    document.getElementById("login-section").classList.add("hidden");
    document.getElementById("dashboard-section").classList.remove("hidden");
  } else {
    document.getElementById("dashboard-section").classList.add("hidden");
    document.getElementById("login-section").classList.remove("hidden");
  }
});
