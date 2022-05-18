import { createRouter, createWebHistory } from 'vue-router'
import ColumnDetail from './views/ColumnDetail.vue'
const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/column/:id',
      name: 'column',
      component: ColumnDetail
    }
  ]
})

export default router
