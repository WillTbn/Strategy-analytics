<template>
  <div class="row justify-center border-blue control-py">
    <div class="col-lg-10 col-12">
      <title-subtitle
        class="q-mx-xl"
        :upText="false"
        textTitle="Pesquisa indices, titulos ou ações:"
      />
    </div>
    <div class="col-lg-10 col-12 q-pa-xl">
      <q-input outlined v-model="text" bg-color="secondary">
        <template v-slot:append>
          <q-icon name="search" size="lg" />
        </template>
      </q-input>
    </div>
    <div
      class="col-md-5 col-sm-12 q-pa-xl"
      v-for="item in options"
      :key="item.id"
    >
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
        :to="item.route"
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
        title: "Expansão Patrimonial",
        subTitle: "Investimento",
        description:
          "Idealizados para investidores que buscam um crescimento expressivo de capital em curto prazo, nossos programas de expansão patrimonial focam na construção de uma carteira sólida, direcionada à maximização de retornos significativos ao final do ciclo de investimento. ",
        etfs: "",
        colorBorder: "border-blue",
        route: "rendavariavel",
      },
      {
        title: "Previdência Futura",
        subTitle: "Aposentadoria",
        description:
          "Nossos planos de aposentadoria são destinados a clientes com capital já consolidado que buscam rendimentos regulares e seguros. Oferecemos soluções para alcançar retornos mensais consistentes e satisfatórios.",
        etfs: "",
        colorBorder: "border-red",
        route: "rendafixa",
      },
      {
        title: "Liquidez Elevada",
        subTitle: "Poupança",
        description:
          "Para aqueles que priorizam segurança e flexibilidade, a Liquidez Elevada proporciona uma alternativa confiável e próspera, com rendimentos consistentes e competitivos, superiores aos padrões do mercado tradicional.",
        etfs: "",
        colorBorder: "border-yellow",
        route: "rendaflexivel",
      },
      {
        title: "Blockchain",
        subTitle: "Altenativos",
        description:
          "Oferecemos aos investidores oportunidades em Blockchain, através de uma vasta seleção de criptomoedas, NFT’S, DeFi e Rollups garantimos opções diversas envolvendo o mundo financeiro digital.",
        etfs: "",
        colorBorder: "border-white",
        route: "perspective",
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
  min-height: 280px;
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
