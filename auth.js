// Firebase Auth + App Initialization
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

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

// Login button click
const loginBtn = document.getElementById("login-btn");
const logoutBtn = document.getElementById("logout-btn");

loginBtn?.addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      document.getElementById("login-section").classList.add("hidden");
      document.getElementById("dashboard-section").classList.remove("hidden");
    })
    .catch(() => {
      document.getElementById("login-error").classList.remove("hidden");
    });
});

logoutBtn?.addEventListener("click", () => {
  signOut(auth).then(() => {
    document.getElementById("dashboard-section").classList.add("hidden");
    document.getElementById("login-section").classList.remove("hidden");
  });
});

onAuthStateChanged(auth, (user) => {
  if (user) {
    document.getElementById("login-section").classList.add("hidden");
    document.getElementById("dashboard-section").classList.remove("hidden");
  } else {
    document.getElementById("dashboard-section").classList.add("hidden");
    document.getElementById("login-section").classList.remove("hidden");
  }
});
