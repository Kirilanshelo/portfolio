import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'

// Bootstrap e Bootstrap Vue Next
import 'bootstrap/dist/css/bootstrap.css'
import { createBootstrap } from 'bootstrap-vue-next'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar as fasStar, faMoon, faSun, faChevronUp ,faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

// CSS custom
import './App.css'

import App from './App.vue'

// Aggiungi icone a libreria
library.add(fasStar, farStar, faMoon, faSun, faChevronUp,  faChevronDown, faLinkedin, faGithub)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(createBootstrap())
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
