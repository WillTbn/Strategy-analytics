<template>
  <div class="row justify-center border-blue">
    <div class="col-lg-10 col-12">
      <title-subtitle
        class="q-mx-xl"
        textTop="oque oferecemos?"
        :upText="false"
        textTitle="Nós ajudamos a encontrar respostas para questões importantes."
        textDescription="Como os investimentos podem ajudar cada vez mais pessoas? "
        textDescription2="E como podemos tornar o mundo dos investimentos mais facil e acessível?"
      />
    </div>
    <div class="col-lg-10 col-12 q-pa-xl">
      <q-input outlined v-model="text" bg-color="secondary">
        <template v-slot:append>
          <q-icon name="search" size="lg" />
        </template>
      </q-input>
    </div>
    <div class="col-5 q-pa-xl" v-for="item in options" :key="item.id">
      <q-card
        class="my-card q-px-lg q-pt-lg"
        square
        flat
        bordered
        :class="item.colorBorder"
      >
        <q-card-section>
          <div class="text-h6 text-weight-bolder">{{ item.title }}</div>
          <div class="text-subtitle2 text-weight-bold">{{ item.subTitle }}</div>
        </q-card-section>
        <q-card-section>
          {{ item.description }}
        </q-card-section>
      </q-card>
      <q-btn
        class="q-mt-sm"
        flat
        dense
        no-caps
        padding="none"
        label="Veja os ETFS disponíveis"
        icon="fa-solid fa-chevron-right"
      />
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import TitleSubtitle from "../components/TitleSubtitle.vue";

export default defineComponent({
  name: "WeofferLayout",
  components: { TitleSubtitle },

  setup() {
    const text = ref("");
    const options = [
      {
        title: "Planos de aplicação Patrimonial",
        subTitle: "Investimento no exterior",
        description:
          "Os ETFs são fundos de investimentos em índice com cotas negociadas na bolsa de valores. Oferecem diversificação de ativos a acesso a diferentes mercados.",
        etfs: "",
        colorBorder: "border-blue",
      },
      {
        title: "Fundo de renda para Aposentadoria",
        subTitle: "",
        description: "",
        etfs: "",
        colorBorder: "border-red",
      },
      {
        title: "Fundo de Liquidez Elevada",
        subTitle: "",
        description: "",
        etfs: "",
        colorBorder: "border-yellow",
      },
      {
        title: "",
        subTitle: "",
        description: "",
        etfs: "",
        colorBorder: "border-white",
      },
    ];
    return { text, options };
  },
});
</script>
<style>
.q-field--outlined .q-field__control:before {
  border-bottom: solid 4px #0085ff;
}
.q-field--outlined .q-field__control {
  border-radius: 8px;
}
.my-card {
  background-color: rgba(217, 217, 217, 0.3);
  height: 310px;
  border-radius: 16px !important;
  border: 0px, 0px, 6px, 0px !important;
}

.border-blue {
  border-bottom: 6px solid #0085ff;
}
.border-red {
  border-bottom: 6px solid #ff0000;
}
.border-yellow {
  border-bottom: 6px solid #baba00;
}
.border-white {
  border-bottom: 6px solid #f1f3fb;
}
</style>
