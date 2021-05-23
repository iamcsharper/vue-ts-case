<template>
  <div class="app-bottom">
    <router-link 
      v-slot="{ href, isActive, navigate }"
      :to="mainRoutesPaths.timeline"
      custom
    >
      <div 
        :href="href"
        class="app-bottom-button"
        :class="[isActive && 'active']"
        @click="navigate"
      >
        <TimelineText />
      </div>
    </router-link>
    
    <router-link 
      v-slot="{ href, isActive, navigate }"
      :to="mainRoutesPaths.chat"
      custom
    >
      <div 
        :href="href"
        class="app-bottom-button"
        :class="[isActive && 'active']"
        @click="navigate"
      >
        <Chat />
      </div>
    </router-link>

    <router-link 
      v-slot="{ href, isActive, navigate }"
      :to="mainRoutesPaths.tasks"
      custom
    >
      <div 
        :href="href"
        class="app-bottom-button"
        :class="[isActive && 'active']"
        @click="navigate"
      >
        <ClipboardList />
      </div>
    </router-link>

    <div class="app-bottom-button" @click="onExtraClicked">
      <ReorderHorizontal />
      {{ counterValue }}
    </div>
  </div>
</template>

<script lang="ts">
import { useStore, Store, State } from "@/store";

import { Options, Vue } from 'vue-class-component';
import { TimelineText, Chat, ClipboardList, ReorderHorizontal } from 'mdue';
import { mainRoutesPaths } from '@/router/index';
import { IMainRoutes } from '@/router/main';

const store = useStore();

@Options({
  // props: {
  //   msg: String
  // },
  components: {
    TimelineText,
    Chat,
    ClipboardList,
    ReorderHorizontal
  }
})
export default class AppBottom extends Vue {
  // msg!: string;
  public mainRoutesPaths: Readonly<IMainRoutes> = mainRoutesPaths;
  get counterValue() {
    return store.getters.doubledCounter;
  }

  private onExtraClicked() {
    store.commit('setAdd', 2);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.app-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: $bottom-app-height;
  background: #fff;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: $horizontal-spacing;
  padding-right: $horizontal-spacing;
  text-align: center;

  .app-bottom-button {
    display: block;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    margin: 0 0.5rem;
    font-size: 1.5rem;
    opacity: 0.4;
    flex: 1;
    line-height: 100%;

    &.active {
      opacity: 1;
    }
  }
}
</style>
