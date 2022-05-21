<!--  -->
<template>
  <div>
    <div class="dropdown" style="display: inline-block;" ref="dropdownRef">
      <button @click="toggleHandle"
              class="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false">
        Dropdown button
      </button>
      <ul v-if="isShow"
          class="dropdown-menu"
          style="display: block"
          aria-labelledby="dropdownMenuButton1">
        <dropdown-item>
          <a href="###">AAAAaa</a>
        </dropdown-item>
        <dropdown-item :disable="true">
          <a href="###">BBBBB</a>
        </dropdown-item>
        <dropdown-item>
          <a href="###">CCCCCCC00000</a>
        </dropdown-item>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import DropdownItem from './DropdownItem.vue'
import useClickOutside from '../hooks/useClickOutside'
export default defineComponent({
  name: 'Dropdown',
  components: {
    DropdownItem
  },
  setup() {
    const isShow = ref(false)
    const toggleHandle = () => {
      isShow.value = !isShow.value
    }

    const dropdownRef = ref<null | HTMLElement>(null)

    const isClickOutside = useClickOutside(dropdownRef)

    watch(isClickOutside, () => {
      if (isShow.value && isClickOutside.value) {
        isShow.value = false
      }
    })

    return {
      isShow,
      toggleHandle,
      dropdownRef
    }
  }
})
</script>
<style scoped>
</style>
