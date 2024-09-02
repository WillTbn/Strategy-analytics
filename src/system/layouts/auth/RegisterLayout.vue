<template>
  <div class="RegisterLayout column justify-center">
    <div class="q-pa-md row justify-center text-white" color="transparent">
      <div class="col-md-3 col-sm-10 self-center">
        <div class="column">
          <header-auth :text="textStep" class="col" />
        </div>

        <first-step @step-current="step = $event" v-if="step == 1" />
        <second-step @step-current="step = $event" v-if="step == 2" />
        <finally-step v-if="step == 3" />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderAuth from "src/system/components/auth/HeaderAuth.vue";
import { computed, defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
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
      1: "Cadastre-se",
      2: "Só mais algumas informações",
      3: "Finalizado",
    };
    const textStep = computed(() => {
      return textPatterns[step.value];
    });
    const router = useRouter();
    const goLogin = () => {
      router.replace({ name: "login" });
    };
    return { step, textStep, goLogin };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
