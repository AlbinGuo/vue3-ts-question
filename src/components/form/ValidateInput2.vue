<template>
  <div>
    <div class="col-md-6">
      inputRef={{inputRef}}
      <label for="validationServer03" class="form-label">City</label>
      <input type="text" @input="updateInput" @blur="validateInput" :class="{'is-invalid': inputRef.error}" class="form-control" id="validationServer03" aria-describedby="validationServer03Feedback">
      <div id="validationServer03Feedback" class="invalid-feedback">
        {{ inputRef.message }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue'

export interface RuleGroup {
  type: 'required' | 'email';
  message: string;
}

export type RulesProp = RuleGroup[]

export default defineComponent({
  props: {
    rules: {
      type: Array as PropType<RulesProp>,
      default: () => []
    },
    modelValue: String
  },
  setup (props, context) {
    const emailReg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
    const inputRef = reactive({
      message: '',
      error: false,
      val: ''
    })

    const updateInput = (e: KeyboardEvent) => {
      const targetValue = (e.target as HTMLInputElement).value
      inputRef.val = targetValue
      context.emit('update:modelValue', targetValue)
    }

    const validateInput = () => {
      if (props.rules) {
        const allPassed = props.rules.every(rule => {
          let passed = true
          inputRef.message = rule.message
          switch (rule.type) {
            case 'required':
              passed = inputRef.val.trim() !== ''
              break
            case 'email':
              passed = emailReg.test(inputRef.val)
              break
            default:
              break
          }
          return passed
        })
        inputRef.error = !allPassed
      }
    }
    return {
      inputRef,
      validateInput,
      updateInput
    }
  }
})
</script>

<style scoped>

</style>
