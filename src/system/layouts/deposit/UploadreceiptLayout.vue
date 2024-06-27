<template>
  <q-card class="UploadreceiptLayout" style="min-width: 350px">
    <q-card-section>
      <div class="text-h6">Enviando Comprovante</div>
    </q-card-section>
    <q-card-section>
      <!-- url="http://localhost:4444/upload" -->
      <q-uploader
        accept=".jpg,.pdf, image/*"
        style="max-width: 300px"
        label="Selecioner seu comprovante"
        color="primary"
      />
    </q-card-section>
    <!-- <q-card-section class="q-pt-none">
      <q-input
        dense
        v-model="address"
        autofocus
        @keyup.enter="prompt = false"
      />
    </q-card-section> -->

    <q-card-actions align="between">
      <q-btn flat label="Cancel" v-close-popup class="text-negative" />
      <q-btn
        flat
        label="enviar Comprovante"
        v-close-popup
        class="text-primary"
      />
    </q-card-actions>
  </q-card>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "UploadreceiptLayout",
});
</script>
<style lang=""></style>
