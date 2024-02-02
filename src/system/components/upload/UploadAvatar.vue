<!-- NÂO ESTA SENDO USADO AINDA -->
<template>
  <div class="UploadAvatar">
    <q-uploader url="http://localhost:4444/upload" style="max-width: 300px" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "UploadAvatar",
  setup() {
    return {};
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
