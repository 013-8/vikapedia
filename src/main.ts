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
import { firebaseConfig } from 'firebase.config'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const analytics = getAnalytics(app)
