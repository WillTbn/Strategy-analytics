<template>
  <transition name="fade" mode="out-in">
    <span :key="regis.status">
      <q-btn
        padding="xs lg"
        label="Cadastre-se"
        class="btn-control"
        v-if="!regis.status"
        no-caps
        @click.prevent="regis.status = true"
      ></q-btn>
      <span style="position: absolute" class="control-span-form" v-else>
        <q-input
          borderless
          v-model="user.person"
          label="Insira seu CPF"
          autofocus
          standout
          square
          dense
          mask="###.###.###-##"
        />
        <span
          @click.prevent="regis.status = false"
          class="text-danger control-btn"
        >
          sair</span
        >
      </span>
    </span>
  </transition>
</template>
<script>
import { defineComponent } from "vue";
import { useRegisterStore } from "../stores/register";
import { useUserStore } from "../stores/user";

export default defineComponent({
  name: "InsertPerson",
  setup() {
    return {
      regis: useRegisterStore(),
      user: useUserStore(),
    };
  },
});
</script>
<style scoped>
.control-span-form {
  margin: -2.3rem;
}
.control-btn {
  cursor: pointer;
}
</style>
