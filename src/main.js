import { createApp } from 'vue';
import App from './App.vue';
import router from "./router"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjTHGdlCq5UkcTQxBFq34uhWppVMT1GsE",
  authDomain: "login-81f1b.firebaseapp.com",
  projectId: "login-81f1b",
  storageBucket: "login-81f1b.firebasestorage.app",
  messagingSenderId: "592357322212",
  appId: "1:592357322212:web:558de4bd81d7a4b7f3abf1"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App);

app.use(router);

app.mount('#app');