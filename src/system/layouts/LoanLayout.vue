<template>
  <div class="LoanLayout">
    <div class="row justify-center">
      <div class="col-12 text-center">
        <textinter-normal text="Empréstimo" />
        <q-separator inset></q-separator>
        <!-- TextinterNormal -->
      </div>
    </div>

    <div
      class="row q-gutter-x-lg q-ma-sm justify-md-between justify-center"
      v-if="loan.datas"
    >
      <div
        class="col-md-5 col-xs-4 f-inter align-text-personal"
        v-for="(item, i) in loan.datas"
        :key="i"
      >
        <div class="">
          <span class="title">{{ item.name }}</span>
          <p class="">{{ item.value }}</p>
        </div>
      </div>
      <div class="col-10 text-center" v-for="(item, i) in loan.info" :key="i">
        <div class="q-my-sm">
          <span class="title">
            {{ item.name }}
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
    <div
      class="row justify-center text-center"
      style="align-content: center; height: 150px"
    >
      <div class="col self-center">
        <q-btn
          unelevated
          push
          square
          :color="mod ? 'white' : 'dark'"
          :text-color="mod ? 'dark' : 'white'"
          label="Solicitar emprestimo"
          :to="{ name: 'loan' }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import TextinterNormal from "../components/TextinterNormal.vue";
import { useUserStore } from "../../stores/user";
import { storeToRefs } from "pinia";
// import TitleinterMedium from "../components/TitleinterMedium.vue";

export default defineComponent({
  name: "LoanLayout",
  components: { TextinterNormal },
  props: { mod: { type: Boolean } },
  setup() {
    const third = ref(false);
    const userStore = useUserStore();
    const { loan } = storeToRefs(userStore);

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
    return { datas, dataAdc, third, loan };
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
