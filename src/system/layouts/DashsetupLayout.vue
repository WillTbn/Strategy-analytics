<template>
  <div class="DashsetupLayout">
    <div class="row">
      <div class="col-12">
        <textarea-title text="Dashboard" />
      </div>
    </div>
    <div class="row text-second">
      <div class="col-12"><span>Tema:</span><br /></div>
      <div class="col-2 col-md-4 text-center">
        <q-btn color="white" @click="activeTema(false)">
          <q-avatar size="42px">
            <q-icon name="img:icons/claro-bg.svg" />
          </q-avatar>
        </q-btn>
        <p>claro</p>
      </div>
      <div class="col-2 text-center">
        <q-btn color="dark" @click="activeTema(true)">
          <q-avatar size="42px">
            <q-icon name="img:icons/slogan-dark.svg" />
          </q-avatar>
        </q-btn>
        <p>Escuro</p>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <q-toggle
          class="text-second"
          left-label
          v-model="animation"
          label="Animações(desative para diminuir o tempo de carregamento)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
// import TextinterNormal from "../components/TextinterNormal.vue";
import TextareaTitle from "../components/TextareaTitle.vue";
// import { Dark } from "quasar";
import useCookies from "../../composables/useCookies";

export default defineComponent({
  name: "DashsetupLayout",
  components: { TextareaTitle },
  setup() {
    const { setDarkMode } = useCookies();

    const activeTema = (status) => {
      // Dark.set(status);
      setDarkMode(status);
      // $q.dark.toggle();
    };
    const animation = ref(true);
    return {
      animation,
      activeTema,
    };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
