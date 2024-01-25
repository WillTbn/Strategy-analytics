<template>
  <div class="CalendaranticipateLayout">
    <div class="row justify-center text-center">
      <div class="col-12 q-mt-xs-lg q-mt-md-none">
        <titleinter-medium text="Antecipação de lucros" />
      </div>

      <div class="col-12 q-mt-xl">
        <p class="">Número de antecipações</p>
      </div>
      <div class="col-md-3 col-12">
        <q-select
          v-model="model"
          transition-show="flip-up"
          transition-hide="flip-down"
          dense
          outlined
          square
          filled
          :options="quantity"
          label="Quantidade (1-24)"
          class="border-btn system"
          rounded
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
      <div class="col-md-8 col-12 q-mt-xl">
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
          label="solicitar"
          padding="sm xl"
          size="lg"
          @click.prevent="goStep('finally')"
          :disabled="!terms || !model"
          flat
          class="border-btn"
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
