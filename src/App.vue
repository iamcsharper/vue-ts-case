<template>
  <main>
    <AppTop />
    <div class="container">
      <p>{{ counterValue }}</p>
      <router-view v-slot="{ Component }">
        <transition
          :name="transitionName"
          mode="out-in"
        >
          <component :is="Component" /> 
        </transition>
      </router-view>
    </div>
    <transition name="fade">
      <Sidebar v-if="isSidebarOpen" />
    </transition>
    <AppBottom />
  </main>
</template>
<script lang="ts">
import { useStore, Store, State } from "@/store";
import AppBottom from '@/components/AppBottom.vue'; 
import AppTop from '@/components/AppTop.vue'; 
import Sidebar from '@/components/Sidebar.vue'; 
import { Options, Vue } from 'vue-class-component';

import { SetupAnimation, IAnimatedRoute } from "@/util/animations";

const store = useStore();

@Options({
  components: {
    AppBottom,
    AppTop,
    Sidebar
  }
})
export default class App extends Vue implements IAnimatedRoute {
  public transitionName = "slide";

  public isSidebarOpen = false;

  get counterValue() {
    return store.getters.counterGet.toString();
  }

  created() {
    SetupAnimation(this);
  }
}
</script>
<style lang="scss">
#app {
  color: #2c3e50;
  padding-bottom: $bottom-app-height;
}
</style>