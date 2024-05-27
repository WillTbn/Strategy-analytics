<template>
  <div class="WelcomeMsg">
    <div class="row justify-center text-white">
      <header-auth :text="text" styleNew="height:25vh" />
      <div class="col-10 col-sm-12 col-md-10">
        <p class="text-h6 text-white">
          Você sera redirecionado em {{ counter }} para tela de login
        </p>
      </div>
    </div>
    <div class="row justify-center">
      <div class="col-3 self-center">
        <q-btn
          no-wrap
          color="indigo-14"
          :to="{ name: 'login' }"
          label="Ir para Login"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, onMounted, ref, watch } from "vue";
import HeaderAuth from "src/system/components/auth/HeaderAuth.vue";
import { useUserStore } from "src/stores/user";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "WelcomeMsg",
  components: {
    HeaderAuth,
  },
  setup() {
    const userStore = useUserStore();
    const { register } = storeToRefs(userStore);
    const counter = ref(30);
    const text = `Seja muito bem vindo, ${register.value.FirstName}!!!`;
    const router = useRouter();
    let timer;
    watch(counter, (n, o) => {
      if (n == 0) {
        clearInterval(timer);
        router.replace({ name: "login" });
      }
    });

    onMounted(() => {
      timer = setInterval(() => {
        counter.value--;
      }, 1000);
    });
    return { timer, counter, register, text };
  },
});
</script>
