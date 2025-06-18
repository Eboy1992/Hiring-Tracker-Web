// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDk7WrViUEWC8BnU3D56V8fh16WzN2HxNc",
  authDomain: "hiringapp-88906.firebaseapp.com",
  projectId: "hiringapp-88906",
  storageBucket: "hiringapp-88906.firebasestorage.app",
  messagingSenderId: "642206725142",
  appId: "1:642206725142:web:68eb389dab614e19df7137",
  measurementId: "G-1K0F39SMCS"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Login
document.getElementById("login-btn")?.addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      document.getElementById("login-section").classList.add("hidden");
      document.getElementById("dashboard-section").classList.remove("hidden");
    })
    .catch(() => {
      document.getElementById("login-error").classList.remove("hidden");
    });
});

// Logout
document.getElementById("logout-btn")?.addEventListener("click", () => {
  auth.signOut().then(() => {
    document.getElementById("dashboard-section").classList.add("hidden");
    document.getElementById("login-section").classList.remove("hidden");
  });
});

// Auth State
auth.onAuthStateChanged((user) => {
  if (user) {
    document.getElementById("login-section").classList.add("hidden");
    document.getElementById("dashboard-section").classList.remove("hidden");
  } else {
    document.getElementById("dashboard-section").classList.add("hidden");
    document.getElementById("login-section").classList.remove("hidden");
  }
});
