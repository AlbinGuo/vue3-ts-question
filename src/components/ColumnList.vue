<template>
  <div>
    <ul>
      <li v-for="column in list" :key="column.id">
        <img :src="column.avatar" :alt="column.title">
        <p>{{ column.title }}</p>
        <p>{{ column.description }}</p>
        <p>进入专栏</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
export interface ColumnProps {
  id: number;
  title: string;
  avatar: string;
  description: string;
}
export default {
  name: 'ColumnList',
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped></style>
