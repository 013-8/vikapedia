// import { createApp } from 'vue'
// import { createPinia } from 'pinia'

// import App from './App.vue'
// import router from './router'
// import './assets/main.css'

// const app = createApp(App)
// app.use(createPinia())
// app.use(router)
// app.mount('#app')

// Initialize Firebase

import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
const app = initializeApp({
    apiKey: 'AIzaSyDSh5KGKutgZjLIxaO1rfZ41PquZch8ZNA',
    authDomain: 'vikapedia.firebaseapp.com',
    projectId: 'vikapedia',
    storageBucket: 'vikapedia.appspot.com',
    messagingSenderId: '711248914910',
    appId: '1:711248914910:web:509a1d3afd53f2df2e954f',
    measurementId: 'G-XVPC6V68GY'
})

const analytics = getAnalytics(app)
