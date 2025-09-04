<template>
  <div class="personal-setting-layout">
    <q-card class="tool">
      <span class="text-weight-bold">Dados Básicos</span>
      <q-btn no-caps flat>
        <IconEdit width="16" height="16" class="q-mx-sm" />
        Editar
      </q-btn>
      <data-basic />
    </q-card>

    <q-card class="tool q-mt-lg">
      <span class="text-weight-bold">Documentos</span>
      <q-btn no-caps flat>
        <IconEdit width="16" height="16" class="q-mx-sm" />
        Editar
      </q-btn>
      <data-document />
    </q-card>
    <q-card class="tool q-mt-lg">
      <span class="text-weight-bold">Localização</span>
      <q-btn no-caps flat>
        <IconEdit width="16" height="16" class="q-mx-sm" />
        Editar
      </q-btn>
      <data-location />
    </q-card>
    <q-card class="tool q-mt-lg">
      <span class="text-weight-bold">Atividade Trabalhista</span>
      <q-btn no-caps flat>
        <IconEdit width="16" height="16" class="q-mx-sm" />
        Editar
      </q-btn>
      <data-job />
    </q-card>
    <q-card class="tool q-mt-lg">
      <span class="text-weight-bold">Contatos de Confiança</span>
      <q-btn no-caps flat>
        <IconEdit width="16" height="16" class="q-mx-sm" />
        Editar
      </q-btn>
      <data-contact />
    </q-card>
  </div>
</template>

<script setup>
import { defineComponent } from "vue";
import DataBasic from "src/system/components/setting/Data/DataBasic.vue";
import DataDocument from "src/system/components/setting/Data/DataDocument.vue";
import DataLocation from "src/system/components/setting/Data/DataLocation.vue";
import DataJob from "src/system/components/setting/Data/DataJob.vue";
import DataContact from "src/system/components/setting/Data/DataContact.vue";

defineComponent({
  name: "PersonalSettingLayout",
});
// Seu código aqui
</script>

<style scoped>
/* Seus estilos aqui */
</style>
