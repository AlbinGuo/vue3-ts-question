<template>
  <div class="container">
    <column-list :list="list"></column-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
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
  },
  {
    id: 3,
    title: 'Angular.js',
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
