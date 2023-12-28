<template>
  <div class="row justify-center border-blue control-py">
    <div class="col-lg-10 col-12">
      <title-subtitle
        class="q-mx-xl"
        textTop="O que oferecemos?"
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
          "Nossos programas de expansão patrimonial são idealizados para investidores que buscam crescimento substancial do capital ao longo de um curto período. Nosso enfoque está na construção de uma carteira sólida que vise grandes lucros ao término do ciclo de investimento.",
        etfs: "",
        colorBorder: "border-blue",
        route: "rendavariavel",
      },
      {
        title: "Previdência Futura",
        subTitle: "Aposentadoria",
        description:
          "Projetos para clientes com capital já consolidado que desejam rendimentos regulares e seguros, nossos planos de aposentadoria enfatizam cartazes robustas que geram retornos mensais consistentes.",
        etfs: "",
        colorBorder: "border-red",
        route: "rendafixa",
      },
      {
        title: "Liquidez Elevada",
        subTitle: "Poupança",
        description:
          "Para aqueles que priorizam a segurança e a flexibilidade, a nossa opção de Liquidez Elevada oferece um refúgio sem riscos com alta liquidez, oferecendo rendimentos estáveis e superiores aos encontrados no mercado convencional.",
        etfs: "",
        colorBorder: "border-yellow",
        route: "rendaflexivel",
      },
      {
        title: "Blockchain",
        subTitle: "Altenativos",
        description:
          "Destinado a explorar as fronteiras emergentes do mundo financeiro digital. Este fundo se concentra em uma seleção criteriosa de criptmoedas, tokens não fungíveis(NFTs), e outros ativos digitais, oferecendo aos investidores uma oportunidade única de participar do crescimento dinâmico dos mercados digitais.",
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
