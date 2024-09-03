<template>
  <div class="ConfigPage">
    <div class="row q-pa-lg" style="min-height: 100dvh">
      <div class="col-md-6 col-sm-12 q-pa-md-lg">
        <personalsetup-layout />
      </div>

      <div class="col-md-5 col-sm-12 q-pa-md-lg">
        <dashsetup-layout />
      </div>
    </div>
    <!-- Seu conteúdo HTML aqui -->
  </div>
</template>

<script>
import { defineComponent } from "vue";
import DashsetupLayout from "../layouts/DashsetupLayout.vue";
import PersonalsetupLayout from "../layouts/PersonalsetupLayout.vue";

export default defineComponent({
  name: "ConfigPage",
  components: { DashsetupLayout, PersonalsetupLayout },
  setup() {
    return {};
  },
  // Outras configurações do componente aqui
});
</script>
