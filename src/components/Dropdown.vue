<!--  -->
<template>
  <div>
    <div class="dropdown">
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
        <dropdown-item :disable="true">
          <a href="###">AAAAaa</a>
        </dropdown-item>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { toRef, defineComponent, ref } from 'vue'
import DropdownItem from './DropdownItem.vue'
export default defineComponent({
  name: 'Dropdown',
  components: {
    DropdownItem
  },
  setup(prop) {
    const isShow = ref(false)
    const toggleHandle = () => {
      isShow.value = !isShow.value
    }
    return {
      isShow,
      toggleHandle
    }
  }
})
</script>
<style scoped>
</style>
