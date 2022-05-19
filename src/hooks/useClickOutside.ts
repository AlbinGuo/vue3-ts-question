import { ref, onMounted, onUnmounted, Ref } from 'vue'
const useClickOutside = (elementRef: Ref<null | HTMLElement>) => {
  const isClickOutside = ref(false)
  const handle = (e: MouseEvent) => {
    if (elementRef.value) {
      if (!elementRef.value.contains(e.target as HTMLElement)) {
        isClickOutside.value = true
      } else {
        isClickOutside.value = false
      }
    }
  }

  onMounted(() => {
    document.addEventListener('click', handle)
  })

  onUnmounted(() => {
    document.removeEventListener('click', handle)
  })

  return isClickOutside
}

export default useClickOutside
