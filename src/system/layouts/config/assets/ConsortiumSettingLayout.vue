<template>
  <div class="imoveis-setting-layout">
    <div
      class="row justify-between tool q-mt-md"
      v-for="(item, index) in imoveisList"
      :key="index"
    >
      <div class="col-auto row">
        <div class="col-12">
          <span class="text-weight-bolder"
            >Valor do Consórcio: {{ item.estimated }}</span
          >
          <span class="text-grey"> Inicio: {{ item.address }} </span>
          <point-center />
          <span class="text-primary">{{ item.cep }}</span>
        </div>
      </div>
      <div class="col-auto">
        <q-btn no-caps color="primary" size="sm" padding="6px">
          <IconEdit width="16" height="16" />
        </q-btn>
      </div>
    </div>
    <q-btn flat no-caps padding="12px">
      <IconPlus width="16" height="16" class="q-mr-sm" />
      Adiconar
    </q-btn>
  </div>
</template>

<script setup>
import { defineComponent } from "vue";
import PointCenter from "src/system/components/PointCenter.vue";

defineComponent({
  name: "ConsortiumSettingLayout",
});
const imoveisList = [
  {
    estimated: "50.000,00",
    address: "dd/mm/aa",
    cep: "45 parcelas",
    status: "Quitado",
    description: "Faltam R$ 10.000,00 para quitação",
  },
];
</script>

<style scoped>
/* Seus estilos aqui */
</style>
