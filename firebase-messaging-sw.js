importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey:"AIzaSyB5KG4iKmlDQ_yvrXRfIIsUMZriT4VduTU",
  authDomain:"nova-official-store.firebaseapp.com",
  projectId:"nova-official-store"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload=>{
  self.registration.showNotification(
    payload.notification.title,
    { body: payload.notification.body }
  );
});
