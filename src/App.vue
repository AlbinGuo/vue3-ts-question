<template>
  <div class="container">
    <div>
      <global-header :user="user"></global-header>
    </div>
    <div>
      <dropdown></dropdown>
    </div>

    <div>
      <validate-input></validate-input>
    </div>

    <div>
      <validate-input-2 :rules="rules" v-model="emailVal"></validate-input-2>
      {{emailVal}}
    </div>

    <div>
      <column-list :list="list"></column-list>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'
import GlobalHeader, { UserProp } from './components/GlobalHeader.vue'
import Dropdown from './components/Dropdown.vue'
import ValidateInput from './components/form/ValidateInput.vue'
import ValidateInput2, { RulesProp } from './components/form/ValidateInput2.vue'

const dataList: ColumnProps = [
  {
    id: 1,
    title: 'Vue.js',
    headimg: 'https://cn.vuejs.org/images/logo.svg',
    avatar: 'https://img.shields.io/badge/vue-js-blue.svg',
    description: 'this is vue.js'
  },
  {
    id: 2,
    title: 'React.js',
    headimg:
      'https://img1.baidu.com/it/u=3606169170,2721037717&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500',
    avatar: 'https://img.shields.io/badge/react-js-blue.svg',
    description: 'this is react.js'
  },
  {
    id: 3,
    title: 'Angular.js',
    headimg:
      'https://img0.baidu.com/it/u=2276354322,369264578&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=557',
    avatar: 'https://img.shields.io/badge/angular-js-blue.svg',
    description: 'this is angular.js'
  },
  {
    id: 4,
    title: 'Node.js',
    avatar: 'https://img.shields.io/badge/node.js-blue.svg',
    description: 'this is node.js'
  },
  {
    id: 5,
    title: 'PHP',
    avatar: 'https://img.shields.io/badge/php-blue.svg',
    description: 'this is php'
  }
]
const user: UserProp = {
  isLogin: true,
  name: 'guoguo',
  id: 111
}
export default defineComponent({
  name: 'App',
  components: {
    ColumnList,
    GlobalHeader,
    Dropdown,
    ValidateInput,
    ValidateInput2
  },
  setup() {
    const emailVal = ref('')
    const rules: RulesProp = [
      { type: 'required', message: '内容不能为空' },
      { type: 'email', message: '邮箱格式不正确' }
    ]
    return {
      list: dataList,
      user,
      rules,
      emailVal
    }
  }
})
</script>

<style>
</style>
