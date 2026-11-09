importScripts('https://www.gstatic.com/firebasejs/10.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBQXDEFuilbYDsry-ktqWylIzqgPZNbUWQ",
  authDomain: "mr-techlabe.firebaseapp.com",
  databaseURL: "https://mr-techlabe-default-rtdb.firebaseio.com",
  projectId: "mr-techlabe",
  storageBucket: "mr-techlabe.firebasestorage.app",
  messagingSenderId: "172436004844",
  appId: "1:172436004844:web:466012505fa13297eb2ac9"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('ব্যাকগ্রাউন্ড মেসেজ পাওয়া গেছে:', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://img.icons8.com/color/96/appointment-reminders.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
