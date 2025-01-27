import { createMemoryHistory, createRouter } from 'vue-router'

import Home from '../views/Home.vue'
import Voting from '../views/Voting.vue'
import About from '../views/About.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/voting', component: Voting },
  { path: '/about', component: About },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router