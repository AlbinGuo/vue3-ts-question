<template>
  <div class="row">
    <div v-for="column in list" :key="column.id" class="col-4">
      <div class="card">
          <img :src="column.avatar" :alt="column.title">
          <div class="card-body" >
            <p class="card-title">{{ column.title }}</p>
            <p class="card-text">{{ column.description }}</p>
            <p class="btn btn-primary">进入专栏</p>
          </div>
      </div>
    </div>
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
