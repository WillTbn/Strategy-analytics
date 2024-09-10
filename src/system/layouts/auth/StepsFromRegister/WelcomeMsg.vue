<template>
  <div class="WelcomeMsg column q-my-lg">
    <!-- <div class="row justify-center text-white text-center"> -->
    <div class="col-10">
      <header-auth :text="text" />
      <p>
        Enviamos um e-mail de com codigo de autentificação você precisara dele
        no primeiro acesso, faça login!
      </p>
    </div>
    <div class="col-10 col-sm-12 col-md-10">
      <p class="text-h6 text-white">
        Você sera redirecionado em {{ counter }}s
      </p>
    </div>
    <!-- </div> -->
    <div class="row justify-center text-center">
      <div class="col-3">
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
    const text = `Bem vindo, ${register.value.name}!!!`;
    // const text = `Bem vindo`;
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
