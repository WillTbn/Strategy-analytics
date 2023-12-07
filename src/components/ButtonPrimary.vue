<template>
  <q-btn
    padding="xs xl"
    :label="textLabel"
    class="btn-reg"
    no-caps
    color="secondary"
    :type="type"
    size="lg"
  ></q-btn>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "ButtonPrimary",
  props: {
    textLabel: { type: String, required: true },
    type: { type: String },
  },
  setup() {
    return {};
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
.btn-reg {
  border-bottom: solid 4px #0085ff;
}
</style>
