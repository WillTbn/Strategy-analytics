<template>
  <div class="LoanLayout">
    <div class="row justify-center">
      <div class="col-12 text-center">
        <textinter-normal text="Empréstimo" />
        <q-separator inset></q-separator>
        <!-- TextinterNormal -->
      </div>
    </div>

    <div class="row q-gutter-x-lg q-ma-sm justify-between">
      <div class="col-5 f-inter" v-for="(item, i) in datas" :key="i">
        <div class="">
          <span class="title">{{ item.title }}</span>
          <p class="">{{ item.value }}</p>
        </div>
      </div>
      <div class="col-10 text-center" v-for="(item, i) in dataAdc" :key="i">
        <div class="q-my-sm">
          <span class="title">
            {{ item.title }}
          </span>
          <span>
            {{ item.value }}
          </span>
        </div>
      </div>
      <div class="col-12 text-center">
        <p class="f-inter">
          Pagamentos com rendimentos
          <q-toggle
            v-model="third"
            checked-icon="check"
            color="green"
            unchecked-icon="clear"
          />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import TextinterNormal from "../components/TextinterNormal.vue";
// import TitleinterMedium from "../components/TitleinterMedium.vue";

export default defineComponent({
  name: "LoanLayout",
  components: { TextinterNormal },
  setup() {
    const third = ref(false);
    const datas = [
      { title: "Saldor devedor", value: "R$ 430.034,83" },
      { title: "Valor contratado", value: "R$ 395.535,43" },
      { title: "Parcela", value: "9 de 48" },
      { title: "Valor da parcela", value: "R$ 3.485,91" },
    ];
    const dataAdc = [
      { title: "Próximo vencimento:", value: "12/12/2023" },
      { title: "Taxa de juros ao mês:", value: "1,98%" },
    ];
    return { datas, dataAdc, third };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
.title {
  opacity: 0.5;
  font-size: 11px;
}
</style>
