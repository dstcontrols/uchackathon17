<template>
  <!-- Main table element -->
  <b-table striped hover :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage" :filter="filter">
    <template slot="name" scope="item">
      {{item.value.first}} {{item.value.last}}
    </template>
    <template slot="isActive" scope="item">
      {{item.value?'Yes :)':'No :('}}
    </template>
    <template slot="actions" scope="item">
      <b-btn size="sm" @click="details(item.item)">Details</b-btn>
    </template>
  </b-table>
</template>

<script>
export default {
  name: 'dashtable',
  props: ['items', 'fields', 'currentPage', 'perPage', 'filter'],
};
</script>
