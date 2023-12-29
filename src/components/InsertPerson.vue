<template>
  <span
    style="position: absolute"
    class="control-span-form"
    @keyup.enter="fromLogin()"
  >
    <q-input
      v-model="login.person"
      label="Insira seu CPF"
      standout
      dense
      :color="inputColor.color"
      mask="###.###.###-##"
      :bg-color="inputColor.bg"
    >
      <template v-slot:append>
        <transition name="fade" mode="out-in">
          <q-avatar>
            <q-icon
              :name="iconRef"
              size="1.5rem"
              :color="inputColor.label"
              @click.enter="fromLogin()"
            />
          </q-avatar>
        </transition>
      </template>
    </q-input>
  </span>
</template>
<script>
import { useQuasar } from "quasar";
import { defineComponent, computed, watch, ref } from "vue";
import { useRegisterStore } from "../stores/register";
import { useUserStore } from "../stores/user";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "InsertPerson",
  setup() {
    const $q = useQuasar();
    const useStore = useUserStore();
    const router = useRouter();
    const { login } = storeToRefs(useStore);

    const iconRef = ref("lock");
    // const dataIcon = ref(0);

    watch(login.value, (a) => {
      if (a.person.length == 14) {
        iconRef.value = "arrow_forward";
      } else {
        iconRef.value = "lock";
      }
    });

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
    const fromLogin = () => {
      if (login.value.person != "") {
        router.push("/login");
      }
    };

    return {
      regis: useRegisterStore(),
      login,
      fromLogin,
      inputColor,
      iconRef,
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
/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 355ms;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
} */
</style>
