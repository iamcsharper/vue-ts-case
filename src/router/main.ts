import { RouteRecordRaw } from 'vue-router'

export interface IMainRoutes {
  /**
  * Task timeline page from the first done to the furthest
  */
  timeline: string;
  /**
  * Work chat page
  */
  chat: string;
  tasks: string;
  // etc
}

const mainRoutesPaths: Readonly<IMainRoutes> = {
  timeline: '/',
  chat: '/chat',
  tasks: '/tasks'
}

const mainRoutes: Array<RouteRecordRaw> = [
  {
    path: mainRoutesPaths.timeline,
    name: 'Timeline',
    component: () => import(/* webpackChunkName: "timeline" */ '@/views/Timeline.vue')
    // meta: { transitionName: 'slide' }
  },
  {
    path: mainRoutesPaths.chat,
    name: 'Chat',
    component: () => import(/* webpackChunkName: "chat" */ '@/views/Chat.vue')
  },
  {
    path: mainRoutesPaths.tasks,
    name: 'Tasks',
    component: () => import(/* webpackChunkName: "tasks" */ '@/views/Tasks.vue')
  }
]

export { mainRoutes, mainRoutesPaths }
