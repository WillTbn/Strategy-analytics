<template>
  <div class="news-letter control-py">
    <div class="row justify-center text-white">
      <div class="col-12 q-px-xl">
        <title-description
          class="q-px-md-xl"
          title="Inscreva-se para receber as
            Perspectivas da Strategy Analytics"
        ></title-description>
      </div>
    </div>
    <q-form>
      <div class="row q-pa-xl q-gutter-sm">
        <div class="col-12 col-lg-3 col-sm-12">
          <span>Nome: *</span>
          <q-input
            outlined
            v-model="newsletter.name"
            bg-color="secondary"
            dense
          />
        </div>
        <div class="col-12 col-lg-3 col-sm-12">
          <span>Sobrenome: *</span>
          <q-input
            outlined
            v-model="newsletter.lastname"
            bg-color="secondary"
            dense
          />
        </div>

        <div class="col-12 col-lg-3 col-sm-12">
          <span>Email: *</span>
          <q-input
            outlined
            v-model="newsletter.email"
            bg-color="secondary"
            dense
          />
        </div>

        <div class="col-12 col-lg-3 col-sm-12 text-white">
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
        <div class="col-12 col-lg-3 col-sm-12">
          <span>Empresa: *</span>
          <q-input
            outlined
            v-model="newsletter.company"
            bg-color="secondary"
            dense
          />
        </div>
        <div class="col-12 col-lg-3 col-sm-12">
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

        <div class="col-12 col-lg-3 col-sm-12">
          <span>Estado: *</span>

          <q-select
            v-model="newsletter.state"
            transition-show="flip-up"
            transition-hide="flip-down"
            input-class="white"
            bg-color="secondary"
            dense
            outlined
            :options="optionsState"
            label="Escolha o estado"
          />
        </div>
        <div class="col-12 col-lg-3 col-sm-12">
          <span>País: *</span>

          <q-select
            v-model="newsletter.country"
            transition-show="flip-up"
            transition-hide="flip-down"
            input-class="white"
            bg-color="secondary"
            dense
            outlined
            :options="optionsCountry"
            label="Escolha o país"
          />
        </div>
      </div>
      <div class="row justify-center text-right">
        <div class="col-lg-6 col-sm-10">
          <span
            >Inscrevendo-se você concorda com nossa <br />
            <b> Politica de privacidade </b></span
          >
        </div>
        <div class="col-12 freak"></div>
        <div class="col-lg-6 col-sm-10">
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
      </div>
    </q-form>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import TitleDescription from "../components/TitleDescription.vue";

export default defineComponent({
  name: "NewsLetter",
  components: { TitleDescription },
  setup() {
    const newsletter = ref({
      name: "",
      lastname: "",
      category: "",
      company: "",
      office: "",
      state: "",
      country: "",
      email: "",
    });
    const optionsOffice = ["Google", "Facebook", "Twitter", "Apple", "Oracle"];
    const optionsCountry = ["Brasil", "Argentina", "Inglaterra", "USA"];
    const optionsCategory = ["nível 1", "nível 2", "nível 3", "nível 4"];
    const optionsState = [
      "Rio de janeiro",
      "São Paulo",
      "Minas Gerais",
      "Rio Grande do Sul",
      "Espirito Santos",
      "Bahia",
    ];

    return {
      newsletter,
      optionsOffice,
      optionsCountry,
      optionsCategory,
      optionsState,
    };
  },
});
</script>
<style>
.btn-reg {
  border-bottom: solid 4px #0085ff;
}
</style>
