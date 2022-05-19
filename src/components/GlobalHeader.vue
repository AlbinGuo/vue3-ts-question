<!--  -->
<template>
  <div>
    <div v-if="user.isLogin">
      {{ user.name }}
    </div>
    <div v-else>
      <div>登录</div>
      <div>注册</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
export interface UserProp {
  isLogin: boolean;
  name?: string;
  id?: number;
}
export default defineComponent({
  name: 'GlobalHeader',
  props: {
    user: {
      type: Object as PropType<UserProp>,
      require: true,
      default: {}
    }
  }
})
</script>
<style scoped>
</style>
