<!--  -->
<template>
  <div>
    <nav class="navbar navbar-dark bg-primary">
      <a class="navbar-brand" href="#">GG专栏</a>
      <ul v-if="!user.isLogin" class="list-inline mb-0">
        <li class="list-inline-item"><a href="##" class="btn btn-outline-light">登录</a></li>
        <li class="list-inline-item"><a href="##" class="btn btn-outline-light">注册</a></li>
      </ul>
      <div v-else class="btn btn-outline-light">
        {{ user.name }}
      </div>
    </nav>
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
