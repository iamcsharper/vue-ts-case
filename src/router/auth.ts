import { RouteRecordRaw } from 'vue-router'

export interface IAuthRoutes {
  authLogin: string
  authRegister: string
}

const authRoutesPaths: Readonly<IAuthRoutes> = {
  authLogin: '/auth/login',
  authRegister: '/auth/register'
}

const authRoutes: Array<RouteRecordRaw> = [
  {
    path: authRoutesPaths.authLogin,
    name: 'Login',
    component: () => import(/* webpackChunkName: "timeline" */ '@/views/Login.vue')
  }
]

export { authRoutes, authRoutesPaths }
