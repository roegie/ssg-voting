import { createMemoryHistory, createRouter } from 'vue-router'

import Home from '../views/Home.vue'
import Voting from '../views/Voting.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/voting', component: Voting },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router