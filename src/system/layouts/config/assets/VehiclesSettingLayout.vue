<template>
  <div class="vehicles-setting-layout">
    <div
      class="row justify-between tool q-mt-md"
      v-for="(item, index) in vehiclesList"
      :key="index"
    >
      <div class="col-auto row">
        <div class="col-12">
          <span class="text-weight-bolder"> {{ item.estimated }}</span>
          <span class="text-grey q-ml-sm"> {{ item.address }} </span>
          <point-center />
          <span class="text-primary">{{ item.cep }}</span>
        </div>
        <div class="col-auto">
          <q-badge
            outline
            color="white"
            class="q-badge-document text-inte-12-400 text-grey"
          >
            {{ item.status }}
          </q-badge>
          <span class="text-grey q-ml-md">{{ item.description }}</span>
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
  name: "VehiclesSettingLayout",
});
const vehiclesList = [
  {
    estimated: "HYUNDAI HB20 COMFORT PLUS 1.6",
    address: "Carro",
    cep: "AAA-0000",
    status: "Não Quitado",
    description: "Faltam R$ 10.000,00 para quitação",
  },
];
// Seu código aqui
</script>

<style scoped>
/* Seus estilos aqui */
</style>
