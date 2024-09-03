<template>
  <div class="row">
    <div class="col-12 q-mb-md">
      <textarea-title text="Ajustes" />
    </div>
    <div class="col-12">
      <q-toggle v-model="animation.theme" label="Ícone selecionar tema." />
    </div>
    <div class="col-12">
      <q-toggle v-model="animation.clock" label="Relógio na barra de menu." />
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import TextareaTitle from "src/system/components/TextareaTitle.vue";
export default defineComponent({
  name: "NavbarSetting",
  components: { TextareaTitle },
  setup() {
    const animation = ref({
      theme: false,
      clock: true,
    });
    return {
      animation,
    };
  },
});
</script>
<style lang="sass"></style>
<style lang=""></style>
