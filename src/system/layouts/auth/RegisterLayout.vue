<template>
  <div class="RegisterLayout">
    <header-auth :text="textStep" />
    <div class="q-pa-md" color="transparent">
      <q-stepper
        v-model="step"
        ref="stepper"
        alternative-labels
        animated
        flat
        class="bg-transparent"
        color="6"
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
          title="Informe seu endereço completo para registro"
          caption="personalizando a plataforma para você"
          icon="fa-solid fa-tachograph-digital"
          :done="step > 2"
        >
          <!-- SecondStep -->
          <second-step @step-current="step = $event" />
        </q-step>

        <q-step :name="3" title="Cria senha" icon="fa-solid fa-lock">
          <finally-step />
        </q-step>
      </q-stepper>
    </div>
  </div>
</template>

<script>
import HeaderAuth from "src/system/components/auth/HeaderAuth.vue";
import { computed, defineComponent, ref } from "vue";
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
    const step = ref(1);
    const textPatterns = {
      1: "Cadastre-se preenchendo seus dados abaixo",
      2: "Informe seu endereço completo para registro",
      3: "Defina sua senha de acesso",
    };
    const textStep = computed(() => {
      return textPatterns[step.value];
    });
    return { step, textStep };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
