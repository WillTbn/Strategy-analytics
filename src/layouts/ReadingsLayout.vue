<template>
  <div class="ReadingsLayout q-py-lg q-ma-xl">
    <div class="row justify-center text-center q-py-lg q-my-xl">
      <div class="col-md-8 col-sm-8">
        <title-secondary text="Literatura" />
      </div>
    </div>
    <div class="row justify-md-center q-py-lg q-my-xl">
      <div class="col-md-6 col-sm-12" v-for="list in lists" :key="list">
        <q-chip class="bg-transparent text-white control-font" square>
          <!-- <q-avatar>
            <img src="img/leitura.png" />
          </q-avatar> -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="36"
            viewBox="0 0 63 72"
            fill="none"
            class="q-pr-sm"
          >
            <path
              d="M61.526 15.1451L61.5262 15.1453C62.1638 15.6918 62.5 16.4151 62.5 17.1422V17.5H42.5V0.5H43.0008C43.9426 0.5 44.8249 0.815846 45.4644 1.364L61.526 15.1451ZM3.9375 0.5H36.25V19.125C36.25 21.3269 38.3208 23 40.6875 23H62.5V68.625C62.5 70.1496 61.0435 71.5 59.0625 71.5H3.9375C1.95652 71.5 0.5 70.1496 0.5 68.625V3.375C0.5 1.85036 1.95652 0.5 3.9375 0.5ZM45.2812 54.5C46.5651 54.5 47.75 53.5863 47.75 52.3125V51.1875C47.75 49.9137 46.5651 49 45.2812 49H17.7188C16.4349 49 15.25 49.9137 15.25 51.1875V52.3125C15.25 53.5863 16.4349 54.5 17.7188 54.5H45.2812ZM45.2812 45.5C46.5651 45.5 47.75 44.5863 47.75 43.3125V42.1875C47.75 40.9137 46.5651 40 45.2812 40H17.7188C16.4349 40 15.25 40.9137 15.25 42.1875V43.3125C15.25 44.5863 16.4349 45.5 17.7188 45.5H45.2812ZM47.75 34.3125V33.1875C47.75 31.9137 46.5651 31 45.2812 31H17.7188C16.4349 31 15.25 31.9137 15.25 33.1875V34.3125C15.25 35.5863 16.4349 36.5 17.7188 36.5H45.2812C46.5651 36.5 47.75 35.5863 47.75 34.3125Z"
              fill="url(#paint0_linear_1902_4520)"
              stroke="url(#paint1_linear_1902_4520)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1902_4520"
                x1="20.8456"
                y1="-2.45902"
                x2="80.2167"
                y2="14.7147"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#0075FF" stop-opacity="0.2" />
                <stop offset="1" stop-color="#0075FF" stop-opacity="0.1" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_1902_4520"
                x1="31.5"
                y1="0"
                x2="31.5"
                y2="72"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0.4" />
                <stop offset="1" stop-color="#0057FF" stop-opacity="0.5" />
              </linearGradient>
            </defs>
          </svg>
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
      { title: "Informações Gerais" },
    ];
    return { lists };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */

.control-font {
  font-size: 1.3rem;
}
@media (max-width: 768px) {
  .control-font {
    font-size: 12px;
  }
}
</style>
