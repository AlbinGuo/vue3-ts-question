<template>
  <div class="container">
    <column-list :list="list"></column-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ColumnList, { ColumnProps } from './components/ColumnList'
const dataList: ColumnProps = [
  {
    id: 1,
    title: 'Vue.js',
    avatar: 'https://img.shields.io/badge/vue-js-blue.svg',
    description: 'this is vue.js'
  },
  {
    id: 2,
    title: 'React.js',
    avatar: 'https://img.shields.io/badge/react-js-blue.svg',
    description: 'this is react.js'
  }
]
export default defineComponent({
  name: 'App',
  components: {
    ColumnList
  },
  setup() {
    return {
      list: dataList
    }
  }
})
</script>

<style>

</style>
