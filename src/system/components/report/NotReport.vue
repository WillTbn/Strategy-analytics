<template>
  <div class="NotReport column justify-center" style="height: 200px !important">
    <div class="col-6">
      Não temos relatório do tipo {{ typeReport }} para ser exibido
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "NotReport",
  props: {
    typeReport: { type: String },
  },
});
</script>
<style lang=""></style>
