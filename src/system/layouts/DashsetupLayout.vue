<template>
  <div class="DashsetupLayout">
    <div class="row">
      <div class="col-12">
        <textarea-title text="Dashboard" />
      </div>
    </div>
    <div class="row text-second">
      <div class="col-12"><span>Tema:</span><br /></div>
      <div class="col-2 text-center">
        <q-btn outline color="primary" @click="activeTema()">
          <q-avatar size="42px">
            <q-icon name="img:icons/claro-bg.svg" />
          </q-avatar>
        </q-btn>
        <p>claro</p>
      </div>
      <div class="col-2 text-center">
        <q-btn color="black" @click="activeTema()">
          <q-avatar size="42px">
            <q-icon name="img:icons/camada-22.svg" />
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
import { defineComponent, ref } from "vue";
// import TextinterNormal from "../components/TextinterNormal.vue";
import TextareaTitle from "../components/TextareaTitle.vue";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "DashsetupLayout",
  components: { TextareaTitle },
  setup() {
    const $q = useQuasar();
    const activeTema = () => {
      console.log("aqui ->", activeTema.name);
      // get status
      console.log($q.dark.isActive); // true, false

      // get configured status
      console.log($q.dark.mode); // "auto", true, false
      // setMoon($q.dark.isActive);
      $q.dark.toggle();
    };
    const animation = ref(true);
    return { animation, activeTema };
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
