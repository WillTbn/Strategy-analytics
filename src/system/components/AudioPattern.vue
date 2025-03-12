<template>
  <div class="AudioPattern">
    <audio
      controls
      style="padding: 0.5rem; background-color: transparent; width: 100%"
    >
      <source :src="audio" type="audio/mpeg" />
      Seu navegador não suporta a tag de áudio.
    </audio>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "AudioPattern",
  props: {
    audio: { type: String, required: true },
    type: { default: "audio/mp3" },
  },
  setup() {
    return {};
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
