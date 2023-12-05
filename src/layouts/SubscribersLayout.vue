<template>
  <div class="row q-mx-xl q-mt-xl" style="min-height: 62rem">
    <div class="col-md-6 col-sm-12 js-left" v-scroll-fire="bounceAnime">
      <div class="q-ml-sm">
        <p
          class="text-h1 text-weight-bold"
          :class="{ 'text-h2': heightScreen }"
        >
          Assinantes
        </p>
        <span class="text-weight-light">
          Com <b>anos de experiência</b> no mercado financeiro e gestão,
          combinados com insights, relatórios, análises e recomendações de
          qualidade incomparável, estamos dedicados a transformar o nosso
          conhecimento no seu resultado financeiro.
        </span>
      </div>
      <q-list>
        <q-item v-for="item in list" :key="item">
          <p class="text-h5 q-my-lg text-weight-bold">
            {{ item.text }}
          </p>
        </q-item>
      </q-list>
    </div>
    <div
      class="col-6 img-right js-center-2"
      :class="{ 'desktop-only': !ipad }"
      v-scroll-fire="bounceAnime"
    ></div>
    <!-- <q-img :src="imgService" :srcset="imgService" :alt="title" :ratio="1" /> -->
    <!-- <div class="col-2"> -->
    <img
      src="img/cavalo-xadrez.png"
      srcset="img/cavalo-xadrez.png"
      alt="Cavalo de xadez"
      class="horse absolute js-right"
      v-scroll-fire="bounceAnime"
      :class="{ 'img-horse': heightScreen }"
    />
    <!-- </div> -->
  </div>
</template>
<script>
import { useQuasar } from "quasar";
import { defineComponent, computed } from "vue";

export default defineComponent({
  setup() {
    const list = [
      { text: "Relatórios" },
      { text: "Alertas em tempo real" },
      { text: "Indicadores exclusivos" },
      { text: "Insights de contribuidores" },
      { text: "Carteiras recomendadas Brasil, EUA e Crypto" },
      { text: "Conteúdo de comunidade no no Discord" },
    ];
    const $q = useQuasar();
    const heightScreen = computed(() => {
      return (
        $q.screen.width <= 1024 &&
        $q.platform.is.platform != "mac" &&
        $q.platform.is.platform != "ipad"
      );
    });
    const ipad = $q.platform.is.ipad;
    return {
      list,
      heightScreen,
      ipad,
      bounceAnime(el) {
        el.classList.add("js-ativo");
        // setTimeout(() => {
        //   console.log("sadas");
        //   // we make sure the node is still in DOM
        //   // (user hasn't navigated away from the Vue component
        //   // rendering our `<div>`)
        //   // so we don't generate an error
        //   if (document.body.contains(el)) {
        //     // then remove the helper class to
        //     // stop bouncing
        //     el.classList.remove("animate-bounce");
        //   }
        // }, 1000);
      },
    };
  },
});
</script>
<style>
.img-right {
  background: url("../assets/img/assinantes.png"), 50%;
  background-repeat: no-repeat;
  background-position: top;
  border-radius: 1%;
}
.horse {
  /* position: absolute; */
  margin-top: -100px;
  right: -150px;
  /* filter: blur(2px); */
}
.img-horse {
  height: 17rem !important;
}
body:not(.desktop) > body:not(.platform-ios) {
  .horse {
    margin-top: 300px !important;
    height: 33rem;
  }
}
body:is(.touch) > body:not(.platform-ios) {
  .horse {
    height: 20rem;
  }
}
</style>
