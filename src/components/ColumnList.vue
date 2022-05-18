<template>
  <div class="row mt-4">
    <div v-for="column in columnList" :key="column.id" class="col-4 mb-4">
      <div class="card-body text-center border">
          <img :src="column.headimg" class="border w-25 my-3 border-light">
          <p><img :src="column.avatar" :alt="column.title"></p>
          <p class="card-title">{{ column.title }}</p>
          <p class="card-text">{{ column.description }}</p>
          <p class="btn btn-outline-primary">进入专栏</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
export interface ColumnProps {
  id: number;
  title: string;
  headimg?: string;
  avatar: string;
  description: string;
}
export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      default: () => []
    }
  },
  setup(props) {
    const columnList = computed(() => {
      return props.list.map(column => {
        if (!column.headimg) {
          column.headimg = require('@/assets/avatar.jpg')
        }
        return column
      })
    })
    console.log(columnList)
    return {
      columnList
    }
  }
})
</script>

<style lang="scss" scoped></style>
