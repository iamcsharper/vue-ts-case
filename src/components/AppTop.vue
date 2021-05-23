<template>
  <div class="app-top">
    <div class="container">
      <a
        href="#"
        class="app-top-logo"
      >Syner</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { TimelineText, Chat, ClipboardList, ReorderHorizontal } from 'mdue';

@Options({
  props: {
    msg: String
  },
  components: {
    TimelineText,
    Chat,
    ClipboardList,
    ReorderHorizontal
  }
})
export default class AppBottom extends Vue {
  msg!: string;


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.app-top {
  top: 0;
  right: 0;
  height: $top-app-height;
  width: 100%;
  background: #2c3e50;
  display: flex;
  padding: #{$top-app-height/4} 0;
  .app-top-logo {
    display: block;
    color: #fff!important;
    outline: none;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
  }
  margin-bottom: $vertical-spacing;
}
</style>