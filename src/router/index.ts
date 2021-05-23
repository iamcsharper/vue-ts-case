import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { mainRoutesPaths, mainRoutes } from '@/router/main'
import { authRoutesPaths, authRoutes } from '@/router/auth'

let routes: Array<RouteRecordRaw> = []
routes = routes.concat(mainRoutes)
routes = routes.concat(authRoutes)

const router = createRouter({
  history: createWebHistory(),
  routes
})

export { 
  mainRoutesPaths, 
  authRoutesPaths,
  router,
  routes 
}
