<template>
  <div class="RegisterLayout">
    <header-auth text="Preencha com seus dados para registra-se" />
    <div class="q-pa-md" color="transparent">
      <q-stepper
        v-model="step"
        ref="stepper"
        alternative-labels
        animated
        flat
        class="bg-transparent"
        color="light-blue-13"
        contracted
      >
        <template v-slot:navigation>
          <q-stepper-navigation>
            <q-btn
              v-if="step > 1"
              icon="fa-solid fa-arrow-left"
              push
              align="around"
              color="primary"
              @click="$refs.stepper.previous()"
              label="Back"
              class="q-ml-sm"
            />
          </q-stepper-navigation>
        </template>
        <!-- color="primary" -->
        <q-step
          :name="1"
          title="Dados principais"
          icon="settings"
          :done="step > 1"
        >
          <first-step @step-current="step = $event" />
        </q-step>

        <q-step
          :name="2"
          title="Dados complementares"
          caption="personalizando a plataforma para você"
          icon="fa-solid fa-tachograph-digital"
          :done="step > 2"
        >
          <!-- SecondStep -->
          <second-step @step-current="step = $event" />
        </q-step>

        <q-step :name="3" title="Cria senha" icon="fa-solid fa-flag-checkered">
          <finally-step />
        </q-step>
      </q-stepper>
    </div>
    <!-- <q-inner-loading
      :showing="loading"
      label="Por favor, aguarde..."
      label-class="text-teal"
      label-style="font-size: 1.1em"
    /> -->
  </div>
</template>

<script>
import HeaderAuth from "src/system/components/auth/HeaderAuth.vue";
import { defineComponent, ref } from "vue";
import FirstStep from "./StepsFromRegister/FirstStep.vue";
import SecondStep from "./StepsFromRegister/SecondStep.vue";
import FinallyStep from "./StepsFromRegister/FinallyStep.vue";
export default defineComponent({
  name: "RegisterLayout",
  components: {
    HeaderAuth,
    FirstStep,
    SecondStep,
    FinallyStep,
  },
  setup() {
    return { step: ref(1) };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
