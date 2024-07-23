import {initializeApp} from "@firebase/app";
import {getAnalytics} from "@firebase/analytics";
import {getAuth} from "@firebase/auth";
import {getFirestore} from "@firebase/firestore";
import {getMessaging, getToken} from "@firebase/messaging";

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


    const app = initializeApp(firebaseConfig)

    const analytics = getAnalytics(app)
    const auth = getAuth(app)
    const messaging=getMessaging(app)
    const get_token=getToken(app)
    nuxtApp.vueApp.provide('auth', auth)
    nuxtApp.provide('auth', auth)

    nuxtApp.vueApp.provide('messaging', messaging)
    nuxtApp.provide('messaging', messaging)

    nuxtApp.vueApp.provide('get_token', get_token)
    nuxtApp.provide('get_token', get_token)
})
