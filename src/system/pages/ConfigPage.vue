<template>
  <div class="ConfigPage">
    <div class="row q-pa-lg" style="min-height: 100dvh">
      <div class="col-md-6 col-sm-12 q-pa-lg">
        <personalsetup-layout />
      </div>
      <q-separator vertical></q-separator>
      <div class="col-md-5 col-sm-12 q-pa-lg">
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

<style>
input[type="text"] {
  color: #000;
  font-size: 1.2rem;
  line-height: 1;
  border-style: none;
  outline: none;
  /* // height calc line-height + (vertical-padding * 2) + (vertical-border * 2) */
  height: calc(0.8em + 0.6em + 0.5em);
  /* width: 65%; */
  padding: 0em 0.4em;
  border: 1.5px solid transparent;
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(0deg, #4694d1a1 0%, #231f20 50%, #696868a1 100%);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  border-radius: 3px;
  background-size: 200% 100%;
  transition: background-position 0.8s ease-out;
}
</style>
