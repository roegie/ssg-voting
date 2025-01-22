import { createMemoryHistory, createRouter } from 'vue-router'

import Home from '../views/Home.vue'
import Voting from '../views/Voting.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/voting', component: Voting },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router