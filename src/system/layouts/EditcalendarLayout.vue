<template>
  <div class="EditcalendarPage">
    <div class="row justify-center text-center">
      <div class="col-12">
        <titleinter-medium text="Data de distribuição de lucros" />
      </div>
      <div class="col-12 q-mt-xl">
        <p class="">Quando deseja receber sua distribuição de lucros?</p>
      </div>
      <div class="col-md-3 col-12">
        <q-select
          v-model="model"
          transition-show="flip-up"
          transition-hide="flip-down"
          dense
          outlined
          :options="workingDays"
          label="selecionar dia útil"
        />
        <!-- standout=" text-dark" -->
        <!-- :loading="loadingInput" -->
      </div>
      <div class="col-12 freak-break"></div>
    </div>
    <div
      class="row justify-center text-center"
      v-if="model.id && model.id != data.profit_date.id"
    >
      <div class="col-md-6 col-sm-12 q-mt-xl">
        <p>
          Eu <b> {{ data.name }} </b> solicito a alteração da data para
          distribuição de lucros <br />
          do <b>{{ data.profit_date.label }}</b
          >, para o <b>{{ model.label }}</b>
        </p>
      </div>
      <div class="col-12 freak-break"></div>
      <div class="col-md-8 col-sm-12 q-mt-xl">
        <q-item class="self-center">
          <!-- v-ripple  tag="label"-->
          <!-- <q-item-section avatar>
            <q-checkbox size="xs" v-model="terms" val="car" />
          </q-item-section> -->
          <q-item-section>
            <q-item-label>
              <q-checkbox size="md" v-model="terms" val="car" />
              <span style="vertical-align: text-bottom">
                Estou <b>ciente</b> de que ao confirmar eu altero a data da
                <b>minha distribuição de lucros.</b>
              </span>
            </q-item-label>
          </q-item-section>
        </q-item>
      </div>
    </div>
    <div class="row justify-center" v-else>
      <p>Selecioner uma data</p>
    </div>
    <div class="row justify-center q-pa-lg text-center">
      <div class="col-6">
        <q-btn
          outline
          no-caps
          rounded
          class="border-btn"
          label="voltar"
          @click.prevent="goStep('home')"
        />
      </div>
      <div class="col-6">
        <q-btn
          v-if="model.id && model.id != data.profit_date.id"
          outline
          no-caps
          rounded
          class="border-btn"
          label="Confirmar"
          :disabled="terms != true && model.id != data.profit_date.id"
          @click.prevent="submit"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { useUserStore } from "src/stores/user";
import { defineComponent, ref } from "vue";
import TitleinterMedium from "../components/TitleinterMedium.vue";
import { storeToRefs } from "pinia";
import { useQuasar } from "quasar";
import { useLayoutStore } from "../../stores/layout";

export default defineComponent({
  name: "EditcalendarLayout",
  components: { TitleinterMedium },
  setup() {
    const terms = ref(false);
    const $q = useQuasar();
    const storeUser = useUserStore();
    const storeLayout = useLayoutStore();

    const { data } = storeToRefs(storeUser);
    const workingDays = [
      { label: "1º dia útil do mês", value: "first", id: 0 },
      { label: "5º dia útil do mês", value: "fifth", id: 1 },
      { label: "10º dia útil do mês", value: "tenth", id: 2 },
      { label: "20º dia útil do mês", value: "twentieth", id: 3 },
      { label: "ultimo dia útil do mês", value: "last", id: 4 },
    ];
    const model = ref({
      label: "ultimo dia útil do mês",
      value: "last",
      id: 4,
    });
    const submit = () => {
      $q.notify("Inf");
      storeLayout.updateCalendarsteps("finally");
    };
    const goStep = (value) => {
      storeLayout.updateCalendarsteps(value);
    };
    return { model, workingDays, data, terms, submit, goStep };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
/* .q-field__native,
.q-field__prefix,
.q-field__suffix,
.q-field__input {
  color: black !important;
  margin-left: 0.5rem !important;
} */
</style>
