<template>
  <div class="CalendaranticipateLayout">
    <div class="row justify-center text-center">
      <div class="col-12">
        <titleinter-medium text="Antecipação de lucros" />
      </div>

      <div class="col-12 q-mt-xl">
        <p class="">Número de antecipações</p>
      </div>
      <div class="col-3">
        <q-select
          v-model="model"
          transition-show="flip-up"
          transition-hide="flip-down"
          bg-color="blue-1"
          color="primary"
          dense
          outlined
          :options="quantity"
          label="Quantidade (1-24)"
        />
      </div>
    </div>
    <div class="row justify-center text-center">
      <div class="col-12 q-mt-xl">
        <p class="">Valor total antecipado:</p>
      </div>
      <div class="col-3">
        <textarea-title text="R$ 10.000,00" />
      </div>
      <div class="col-12"></div>
      <div class="col-12 q-mt-xl">
        <p class="">Valor total sem antecipação:</p>
      </div>
      <div class="col-3">
        <textarea-title text="R$ 13.473,38" />
      </div>
    </div>
    <div class="row justify-center text-center">
      <div class="col-md-8 col-sm-12 q-mt-xl">
        <q-item class="self-center">
          <q-item-section>
            <q-item-label>
              <q-checkbox size="md" v-model="terms" val="car" />
              <span style="vertical-align: text-bottom">
                Estou ciente dos
                <b> <a href="#">termos de Antecipação de lucros</a></b>
                e concordo plenamente.
              </span>
            </q-item-label>
          </q-item-section>
        </q-item>
      </div>
    </div>
    <div class="row justify-center q-pa-lg text-center">
      <div class="col-6">
        <q-btn
          outline
          no-caps
          rounded
          color="primary"
          label="solicitar"
          padding="sm xl"
          size="lg"
          @click.prevent="goStep('finally')"
          :disabled="!terms || !model"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import TextareaTitle from "../components/TextareaTitle.vue";
import TitleinterMedium from "../components/TitleinterMedium.vue";
import { useLayoutStore } from "../../stores/layout";
export default defineComponent({
  name: "CalendaranticipateLayout",
  components: { TextareaTitle, TitleinterMedium },
  setup() {
    const model = ref(null);
    const terms = ref(false);
    const quantity = [1, 2, 3, 4, 24];
    const storeLayout = useLayoutStore();
    const goStep = (value) => {
      storeLayout.updateCalendarsteps(value);
    };
    return { terms, quantity, model, goStep };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
