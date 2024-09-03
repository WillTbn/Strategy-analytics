<template>
  <div class="ThemeSetting">
    <div class="row">
      <div class="col-12 q-mb-md">
        <textarea-title text="Tema" />
      </div>
    </div>
    <div class="row q-gutter-sm">
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import TextareaTitle from "src/system/components/TextareaTitle.vue";

export default defineComponent({
  name: "ThemeSetting",
  components: { TextareaTitle },
});
</script>
<style lang="sass"></style>

<style lang=""></style>
