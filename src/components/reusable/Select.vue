<template>
  <div
    class="form-control selectbox" 
    :tabindex="tabindex"
    @blur="open = false"
  >
    <div 
      class="selected"
      :class="{ open: open }"
      @click="open = !open"
    >
      {{ selected }}
    </div>
    <div
      class="items"
      :class="{ selectHide: !open }"
    >
      <div
        v-for="(option, i) of options"
        :key="i"
        :class="{active: selected === option}"
        @click="onSelected(option)"
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {
	Options,
	Vue
} from "vue-class-component";

@Options({
	props: {
		options: {
			type: Array,
			required: true
		},
		defaultValue: {
			type: String,
			required: false,
			default: null
		},
		tabindex: {
			type: Number,
			required: false,
			default: 0
		}
	}
})

/**
 * A selectbox reusable component
 */
export default class Select extends Vue {
	public open = false;

	public options: Array<String> = [];
	public tabindex?: Number;
	public defaultValue?: String;

	public selectedValue: String = '';

  /**
   * A computed field to represent current selected option
   */
	get selected() {
		return this.selectedValue.length ? this.selectedValue :
      this.defaultValue ? this.defaultValue 
      : this.options && this.options.length > 0 
      ? this.options[0] : null;
	}

	onSelected(option: String) {
		this.selectedValue = option;
		this.open = false;
		this.emitInput();
	}

	emitInput(): void {
		this.$emit("input", this.selected);
	}

	mounted(): void {
	}
}
</script>
<style lang="scss">
.selectbox {
  display: block;
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  margin-bottom: $vertical-spacing;

  .selected {
    background-color: transparent;
    border-radius: 6px;
    border: 1px solid #333;
    color: #333;
    padding: 1em 0;
    padding-left: 1em;
    cursor: pointer;
    user-select: none;
    position: relative;

    &.open {
      padding-bottom: 1em;
      border: 2px solid $hover-color-dark;
      border-bottom-width: 0px;
      border-radius: 6px 6px 0px 0px;
      box-shadow: inset 0 -1px 1px $hover-color-dark;
    }

    &:after {
      position: absolute;
      content: "";
      top: 22px;
      right: 1em;
      width: 0;
      height: 0;
      border: 5px solid transparent;
      border-color: #000 transparent transparent transparent;
    }
  }

  .items {
    color: #000;
    border-radius: 0px 0px 6px 6px;
    overflow: hidden;
    border-right: 1px solid #333;
    border-left: 1px solid #333;
    border-bottom: 1px solid #333;
    position: absolute;
    background-color: #fff;
    left: 0;
    right: 0;
    z-index: 1;
    opacity: 1;
    height: auto;
    transition: opacity .3s ease-in-out, height .5s ease;

    &.selectHide {
      height: 0;
      opacity: 0;
    }
    
    div {
      padding: 0.8rem 0;
      padding-left: 1em;
      cursor: pointer;
      user-select: none;
      &:hover {
        background-color: $hover-color;
      }
      &.active {
        background-color: rgb(68, 68, 68);
        color: #fff;
      }
    }
  }
}
</style>