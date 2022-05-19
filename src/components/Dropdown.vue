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
          <a href="###">CCCCCCC</a>
        </dropdown-item>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { toRef, defineComponent, ref, onMounted, onUnmounted } from 'vue'
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

    const dropdownRef = ref<null | HTMLElement>(null)

    const handle = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (dropdownRef.value) {
        if (!dropdownRef.value.contains(target) && isShow.value) {
          isShow.value = false
        }
      }
    }
    onMounted(() => {
      document.addEventListener('click', handle)
    })

    onUnmounted(() => {
      document.removeEventListener('click', handle)
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
