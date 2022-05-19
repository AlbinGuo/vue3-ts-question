<!--  -->
<template>
  <div>
    <li class="dropdown-option"
        :class="{'is-disable': disable}">
      <slot></slot>
    </li>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'DropdownItem',
  props: {
    disable: {
      type: Boolean,
      require: false,
      default: false
    }
  }
})
</script>
<style scoped>
.dropdown-option.is-disable {
  pointer-events: none;
  color: red;
  background: #cccccc;
}
</style>
