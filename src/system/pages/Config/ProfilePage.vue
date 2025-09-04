<template>
  <q-page class="profile-page">
    <title-page title="Perfil Completo" subtitle="Área Perfil" />
    <q-tabs
      v-model="tab"
      active-color="white"
      class="q-ma-md tool"
      align="left"
      no-caps
    >
      <q-tab
        :name="item.value"
        :label="item.label"
        v-for="(item, index) in options"
        :key="index"
      ></q-tab>
    </q-tabs>
    <q-tab-panels
      v-model="tab"
      animated
      swipeable
      vertical
      transition-prev="scale"
      transition-next="scale"
      class="bg-transparent"
    >
      <q-tab-panel
        :name="item.value"
        v-for="(item, index) in options"
        :key="index"
      >
        <component :is="componentsMap[item.component]" />
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<script setup>
import { defineComponent, ref } from "vue";
import TitlePage from "src/system/components/TitlePage.vue";
import PersonalSettingLayout from "src/system/layouts/config/PersonalSettingLayout.vue";
import DocumentationSettingLayout from "src/system/layouts/config/DocumentationSettingLayout.vue";

const componentsMap = {
  PersonalSettingLayout,
  DocumentationSettingLayout,
};
defineComponent({
  name: "ProfilePage",
});

const tab = ref("documentation");

const options = [
  {
    label: "Dados Pessoais",
    value: "personal",
    component: "PersonalSettingLayout",
  },
  {
    label: "Documentação",
    value: "documentation",
    component: "DocumentationSettingLayout",
  },
  {
    label: "Contas Bancárias",
    value: "bank",
    component: "PersonalSettingLayout",
  },
  {
    label: "Registro de Patrimônios",
    value: "patrimonio",
    component: "PersonalSettingLayout",
  },
  {
    label: "Contratos e Termos",
    value: "contracts",
    component: "PersonalSettingLayout",
  },
];
</script>

<style scoped>
/* Seus estilos aqui */
</style>
