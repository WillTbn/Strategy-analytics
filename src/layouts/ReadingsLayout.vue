<template>
  <div class="ReadingsLayout q-py-lg q-ma-xl">
    <div class="row justify-md-center text-center q-py-lg q-my-xl">
      <div class="col-md-8 col-sm-8">
        <title-secondary text="Literatura" />
      </div>
    </div>
    <div class="row justify-md-center q-py-lg q-my-xl">
      <div class="col-md-6 col-sm-12" v-for="list in lists" :key="list">
        <q-chip class="bg-transparent text-white" square size="1.3rem">
          <q-avatar>
            <img src="img/leitura.png" />
          </q-avatar>
          {{ list.title }}
        </q-chip>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TitleSecondary from "../components/TitleSecondary.vue";

export default defineComponent({
  name: "ReadingsLayout",
  components: { TitleSecondary },
  setup() {
    const lists = [
      { title: "Fatores de Risco" },
      { title: "Custos sobre Operações Financeiras de Risco" },
      { title: "Manifestação de Voto da Assembleia Geral" },
      { title: "Projeções de Desempenho e Benchmarking" },
      { title: "Informações Gerais" },
      { title: "Teste" },
    ];
    return { lists };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
