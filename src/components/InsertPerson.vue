<template>
  <!-- <transition name="fade" mode="out-in"> -->
  <!-- <span :key="regis.status"> -->
  <!-- <q-btn
        padding="xs lg"
        label="Cadastre-se"
        class="btn-control"
        v-if="!regis.status"
        no-caps
        @click.prevent="regis.status = true"
      ></q-btn> -->
  <span style="position: absolute" class="control-span-form">
    <!-- :label-color="inputColor.label" -->
    <q-input
      v-model="user.person"
      label="Insira seu CPF"
      standout
      dense
      :color="inputColor.color"
      mask="###.###.###-##"
      :bg-color="inputColor.bg"
    >
      <template v-slot:append>
        <q-avatar>
          <q-icon name="lock" size="1.5rem" :color="inputColor.label" />
        </q-avatar>
      </template>
    </q-input>
    <!-- <span
          @click.prevent="regis.status = false"
          class="text-danger control-btn"
        >
          sair</span
        > -->
  </span>
  <!-- </span> -->
  <!-- </transition> -->
</template>
<script>
import { useQuasar } from "quasar";
import { defineComponent, computed } from "vue";
import { useRegisterStore } from "../stores/register";
import { useUserStore } from "../stores/user";

export default defineComponent({
  name: "InsertPerson",
  setup() {
    const $q = useQuasar();
    const heightScreen = computed(() => {
      return (
        $q.screen.width <= 1024 &&
        $q.platform.is.platform != "mac" &&
        $q.platform.is.platform != "ipad"
      );
    });
    // label: heightScreen.value ? "text-primary" : "text-info",
    const inputColor = {
      bg: heightScreen.value ? "primary" : "dark",
      color: heightScreen.value ? "dark" : "white",
      input: heightScreen.value
        ? "{ color: '#000 !important' }"
        : "{ color: '#fff' !important' }",
    };

    return {
      regis: useRegisterStore(),
      user: useUserStore(),
      inputColor,
    };
  },
});
</script>
<style scoped>
.control-span-form {
  margin: -1.3rem;
}
.control-btn {
  cursor: pointer;
}
</style>
