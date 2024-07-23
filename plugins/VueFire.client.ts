import {initializeApp} from "@firebase/app";
import {getAnalytics} from "@firebase/analytics";
import {getAuth} from "@firebase/auth";
import {getFirestore} from "@firebase/firestore";
import {getMessaging, getToken} from "@firebase/messaging";
import {VueFire, VueFireAuth} from "vuefire";
import {pitLib} from "~/helpers/pitLib";

export default defineNuxtPlugin((nuxtApp) => {
    const firebaseConfig = {
        apiKey: "AIzaSyDBLrsp6EWHTNu0fynODZpKiPq2iL8M2wU",
        authDomain: "hello-vegan.firebaseapp.com",
        projectId: "hello-vegan",
        storageBucket: "hello-vegan.appspot.com",
        messagingSenderId: "86454988086",
        appId: "1:86454988086:web:d4894c94467cb5907f1797",
        measurementId: "G-KVGV7EHCNN",
        vapidKey:"BBxc23p9Ond5HWi5Jl829qdWfYyT6ygAun0cZLhClIrbzH63j"
    };
    const firebaseApp = initializeApp(firebaseConfig);
    const messaging = getMessaging(firebaseApp);
    // pitLib.fcmToken(messaging).then(r => {
    //     console.log(r)
    // })
    if (process.client) {
        navigator.serviceWorker.register('/firebase-messaging-sw.js')
            .then((registration) => {
                messaging.useServiceWorker(registration);
            }).catch((err) => {
            console.error('Service Worker registration failed: ', err);
        });
    }

    nuxtApp.vueApp.use(VueFire, {
        firebaseApp,
        modules: [VueFireAuth()],
    });

    nuxtApp.provide('messaging', messaging);
})
