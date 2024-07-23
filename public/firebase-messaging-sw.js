

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
const firebaseApp = initializeApp({
    apiKey: "AIzaSyDBLrsp6EWHTNu0fynODZpKiPq2iL8M2wU",
    authDomain: "hello-vegan.firebaseapp.com",
    projectId: "hello-vegan",
    storageBucket: "hello-vegan.appspot.com",
    messagingSenderId: "86454988086",
    appId: "1:86454988086:web:d4894c94467cb5907f1797",
    measurementId: "G-KVGV7EHCNN",
    vapidKey:"BBxc23p9Ond5HWi5Jl829qdWfYyT6ygAun0cZLhClIrbzH63j"
});
console.log("in sw")
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize your notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/favicon.ico'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});