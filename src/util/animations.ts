import { Vue } from 'vue-class-component'
import { routes } from '@/router/index'

type RouteToIndexMapType = {
  [key: string]: number
}
const routesMap: RouteToIndexMapType = {}

let i = 0
for (const route of routes) {
  routesMap[route.path] = i
  i++
}

const DEFAULT_TRANSITION = 'slide'

export interface IAnimatedRoute {
  transitionName?: String
} 

export function SetupAnimation(vueClass: Vue & IAnimatedRoute) {
  vueClass.$router.beforeEach((to, from, next) => {
      let transitionName: any = to.meta.transitionName || from.meta.transitionName
      transitionName = transitionName || DEFAULT_TRANSITION
  
      if (transitionName === 'slide') {
          const toDepth = to.path.split('/').length
          const fromDepth = from.path.split('/').length

          const toIndex = routesMap[to.path]
          const fromIndex = routesMap[from.path]
          transitionName = 
            toIndex > fromIndex ? 'slide-right' 
            : toDepth < fromDepth ? 'slide-right'
            : 'slide-left'
        }
  
      vueClass.transitionName = transitionName
  
      next()
    })
}
