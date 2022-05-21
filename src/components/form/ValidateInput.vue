<template>
  <div>
    <div class="m-3">
      <div>
        <input placeholder="请输入邮箱" type="text" class="form-control" id="inputGroupFile01" v-model="emailRef.val" @blur="validateEmail">
      </div>
      <div v-if="emailRef.error">{{ emailRef.message }}</div>
    </div>
    <div class=" m-3">
      <input placeholder="请输入手机号" type="text" class="form-control" id="inputGroupFile02">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  name: 'ValidateInput',
  setup() {
    const emailRef = reactive({
      message: '',
      error: false,
      val: ''
    })

    const validateEmail = () => {
      const emailReg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
      // 校验email是否为空
      if (emailRef.val === '') {
        emailRef.error = true
        emailRef.message = '邮箱不能为空'
      } else if (!emailReg.test(emailRef.val)) {
        emailRef.error = true
        emailRef.message = '邮箱格式不正确'
      }
    }

    return {
      emailRef,
      validateEmail
    }
  }
})
</script>

<style>

</style>
