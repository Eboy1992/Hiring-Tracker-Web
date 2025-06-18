import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

// ✅ Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDk7WrViUEWC8BnU3D56V8fh16WzN2HxNc",
  authDomain: "hiringapp-88906.firebaseapp.com",
  projectId: "hiringapp-88906",
  storageBucket: "hiringapp-88906.firebasestorage.app",
  messagingSenderId: "642206725142",
  appId: "1:642206725142:web:68eb389dab614e19df7137",
  measurementId: "G-1K0F39SMCS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ✅ Track if login button was clicked
let manualLoginTriggered = false;

// ✅ Login
document.getElementById("login-btn")?.addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  manualLoginTriggered = true;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      // Firebase state listener will handle UI
    })
    .catch((error) => {
      alert("Login failed: " + error.message);
      document.getElementById("login-error").classList.remove("hidden");
    });
});

// ✅ Logout
document.getElementById("logout-btn")?.addEventListener("click", () => {
  signOut(auth).then(() => {
    // Firebase state listener will handle UI
  });
});

// ✅ Listen to auth state changes and toggle UI accordingly
onAuthStateChanged(auth, (user) => {
  if (user && manualLoginTriggered) {
    // Show dashboard only if login was triggered manually
    document.getElementById("login-section").classList.add("hidden");
    document.getElementById("dashboard-section").classList.remove("hidden");
  } else {
    // Hide dashboard and show login
    document.getElementById("dashboard-section").classList.add("hidden");
    document.getElementById("login-section").classList.remove("hidden");

    // Clear input and error
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("login-error").classList.add("hidden");

    // Reset the manual flag so it doesn't persist
    manualLoginTriggered = false;
  }
});

