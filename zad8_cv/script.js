import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
    getFirestore,
    collection,
    addDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "PASTE_YOUR_KEY",
    authDomain: "PASTE_YOUR_DOMAIN",
    projectId: "PASTE_PROJECT_ID",
    storageBucket: "PASTE_BUCKET",
    messagingSenderId: "PASTE_ID",
    appId: "PASTE_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById("contactForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    await addDoc(collection(db, "messages"), {
        name: name,
        email: email,
        message: message,
        createdAt: new Date()
    });

    document.getElementById("info").textContent = "Wysłano poprawnie!";
    this.reset();
});