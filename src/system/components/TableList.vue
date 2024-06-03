<template>
  <div class="TableList">
    <q-table
      :title="title"
      :rows="rowsList"
      :columns="columnsList"
      :filter="filterList"
      no-data-label="Não encontrei nenhum usuário para exibir."
      no-results-label="Esse filtro não encontrou nenhum resultado"
      row-key="name"
      flat
      bordered
      class="col-8 col-md-8 col-sm-12"
      :loading="loading"
    >
      <slot />
    </q-table>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "TableList",
  props: {
    title: { type: String },
    rowsList: { type: Array },
    columnsList: { type: Array },
    filterList: { type: String },
  },
});
</script>
<style lang=""></style>
