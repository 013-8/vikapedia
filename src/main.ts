import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import firebase from 'firebase/app'
// import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'
// import { firebaseConfig } from '../firebase-config'

import App from './App.vue'
import router from './router'
import './assets/main.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')

// Initialize Firebase

// const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
// export default firebase
