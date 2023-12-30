<template>
  <div class="news-letter control-py">
    <!-- <div class="row justify-center text-white">

    </div> -->
    <q-form>
      <div class="row q-pa-xl q-gutter-sm justify-center">
        <!-- <div class="col-md-12 col-xs-11 q-px-xl"> -->
        <div class="col-12 col-md-9 col-sm-12">
          <title-description
            class="q-px-md-xl"
            title="Inscreva-se para receber as
            Perspectivas da Strategy Analytics"
          ></title-description>
        </div>
        <div class="col-12 col-md-12 col-sm-12"></div>
        <div class="col-12 col-md-3 col-sm-12">
          <span>Nome: *</span>
          <q-input
            outlined
            v-model="newsletter.name"
            bg-color="secondary"
            dense
          />
        </div>
        <div class="col-12 col-md-3 col-sm-12">
          <span>Sobrenome: *</span>
          <q-input
            outlined
            v-model="newsletter.lastname"
            bg-color="secondary"
            dense
          />
        </div>

        <div class="col-12 col-md-3 col-sm-12">
          <span>Email: *</span>
          <q-input
            outlined
            v-model="newsletter.email"
            bg-color="secondary"
            dense
          />
        </div>

        <div class="col-12 col-md-3 col-sm-12 text-white">
          <span>categoria de investidor: *</span>

          <q-select
            v-model="newsletter.category"
            transition-show="flip-up"
            transition-hide="flip-down"
            input-class="text-white"
            bg-color="secondary"
            dense
            outlined
            :options="optionsCategory"
            label="Escolha o categoria"
          />
        </div>
        <div class="col-12 col-md-3 col-sm-12">
          <span>Empresa: *</span>
          <q-input
            outlined
            v-model="newsletter.company"
            bg-color="secondary"
            dense
          />
        </div>
        <div class="col-12 col-md-3 col-sm-12">
          <span>Cargo: *</span>
          <q-select
            v-model="newsletter.office"
            transition-show="flip-up"
            transition-hide="flip-down"
            input-class="white"
            bg-color="secondary"
            dense
            outlined
            :options="optionsOffice"
            label="Escolha o cargo"
          />
        </div>
        <div class="col-12 col-md-3 col-sm-12">
          <span>País: *</span>

          <q-select
            v-model="valueCountry.name"
            transition-show="flip-up"
            transition-hide="flip-down"
            input-class="white"
            bg-color="secondary"
            dense
            outlined
            :options="optionsCountry"
            label="Escolha o país"
            :loading="loadingInput"
          />
        </div>
        <div class="col-12 col-md-3 col-sm-12">
          <span>Estado: *</span>

          <q-select
            v-model="newsletter.state"
            transition-show="flip-up"
            transition-hide="flip-down"
            input-class="white"
            bg-color="secondary"
            dense
            outlined
            :disable="statusState"
            :options="optionsState"
            label="Escolha o estado"
            :loading="loadingInput"
          />
        </div>
        <div class="col-12 col-md-3 col-sm-12"></div>
      </div>
      <div class="row justify-center text-right">
        <div class="col-lg-10 col-sm-10">
          <q-btn
            padding="xs xl"
            label="Inscrever-se"
            class="btn-reg"
            no-caps
            color="secondary"
            type="submit"
            size="lg"
          ></q-btn>
        </div>
        <div class="col-12 freak"></div>
        <div class="col-lg-10 col-sm-10 q-mt-sm">
          <span>Leia nossa política de privacidade</span>
          <span> <b> Politica de privacidade </b></span>
        </div>
      </div>
    </q-form>
  </div>
</template>
<script>
import { defineComponent, ref, watch } from "vue";
import TitleDescription from "../components/TitleDescription.vue";
import useStates from "../composables/useStates";

export default defineComponent({
  name: "NewsLetter",
  components: { TitleDescription },
  setup() {
    const statusState = ref(true);
    const { get } = useStates();
    const optionsState = ref();
    const loadingInput = ref(false);

    const getStates = async (id) => {
      try {
        loadingInput.value = true;

        optionsState.value = await get(id);
        statusState.value = false;
      } catch (e) {
        console.log("ESTAMOS NO ERROR", e);
      } finally {
        setTimeout(() => {
          loadingInput.value = false;
        }, 1000);
        newsletter.value.state = "";
      }
    };
    const valueCountry = ref({
      name: "",
    });
    const newsletter = ref({
      name: "",
      lastname: "",
      category: "",
      company: "",
      office: "",
      state: "",
      country: valueCountry.value.name.label,
      email: "",
    });
    watch(valueCountry.value, (n) => {
      if (valueCountry.value.name || n.name.id != valueCountry.value.name.id) {
        newsletter.value.country = n.name.label;
        getStates(valueCountry.value.name.id);
      }
    });
    const optionsOffice = [
      "Diretor Executivo (CEO)",
      "Diretor financeiro (CFO)",
      "Diretor de investimento (CIO)",
      "Diretor de operação (COO)",
      "Diretor de risco (CRO)",
      "Selecionador de fundos",
      "Analista de investimento",
      "Gestor de investimento",
      "Gestor de carteira",
      "Private banker",
      "Gerente de ralacionamento",
      "Analista de riscos",
      "Trader",
      "Outros",
    ];
    const optionsCountry = [
      { label: "Brasil", value: "brasil", id: 0 },
      { label: "Argentina", value: "argentina", id: 1 },
      { label: "USA", value: "usa", id: 2 },
      { label: "Austrália", value: "australia", id: 3 },
      { label: "Portugal", value: "portugal", id: 4 },
    ];
    const optionsCategory = [
      "Investidor profissional",
      "Investidor institucional",
      "Investidor individual",
    ];

    return {
      newsletter,
      optionsOffice,
      optionsCountry,
      optionsCategory,
      optionsState,
      statusState,
      valueCountry,
      loadingInput,
      getStates,
    };
  },
});
</script>
<style>
.btn-reg {
  border-bottom: solid 4px #0085ff;
}
</style>
