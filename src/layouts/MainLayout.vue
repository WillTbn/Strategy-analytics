<template>
  <q-layout
    view="hHr lpR fFr"
    class="bg-all"
    :class="{ 'bg-simulator': route.name == 'simulator' }"
    v-scroll="onScroll"
  >
    <navbar-drop :classHeader="bgHeader" />

    <q-page-container padding>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="route.name"></component>
        </transition>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

import { useLayoutStore } from "../stores/layout";
import NavbarDrop from "../components/NavbarDrop.vue";
// import { useMeta } from "quasar";
export default defineComponent({
  components: {
    NavbarDrop,
  },
  setup() {
    const descri = ref(
      "A Strategy Analytics é uma das principais empresas de gestão de ativos e investimentos do Brasil. Saiba mais sobre nossa gestão de investimentos e serviços..."
    );
    const tit = ref(
      "Gestão de Investimentos e Serviços Financeiros | Strategy Analytics"
    );
    const url = ref("https://strategyanalytics.com.br/");
    const metaData = {
      // sets document title
      title:
        "Gestão de Investimentos e Serviços Financeiros | Strategy Analytics",
      // optional; sets final title as "Index Page - My Website", useful for multiple level meta
      titleTemplate: (title) => `${title}`,

      // meta tags
      meta: {
        description: {
          name: "description",
          content: descri.value,
        },
        keywords: {
          name: "keywords",
          content: "investimento, gestão, financias",
        },
        equiv: {
          "http-equiv": "Content-Type",
          content: "text/html; charset=UTF-8",
        },
        // note: for Open Graph type metadata you will need to use SSR, to ensure page is rendered by the server
        ogTitle: {
          property: "og:title",

          // optional; similar to titleTemplate, but allows templating with other meta properties
          template() {
            return tit.value;
          },
        },
        ogDescription: {
          property: "og:description",
          template() {
            return descri.value;
          },
        },
        ogImage: {
          property: "og:image",
          template() {
            return `https://strategyanalytics.com.br/img/icon-strategy-meta.png`;
          },
        },
        ogUrl: {
          property: "og:url",
          template() {
            return `https://strategyanalytics.com.br/`;
          },
        },
        ogType: {
          property: "og:type",
          template() {
            return `website`;
          },
        },
        // Twitter
        twitterCard: {
          property: "twitter:card",
          template() {
            return `summary_large_image`;
          },
        },
        twitterUrl: {
          property: "twitter:url",
          template() {
            return url.value;
          },
        },
        twitterTitle: {
          property: "twitter:title",
          template() {
            return tit.value;
          },
        },
        twitterDescription: {
          property: "twitter:description",
          template() {
            return descri.value;
          },
        },
        twitterImage: {
          property: "twitter:image",
          template() {
            return `${url.value}img/icon-strategy-meta.png`;
          },
        },
      },

      // CSS tags
      link: {
        material: {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      },

      // JS tags
      script: {
        ldJson: {
          type: "application/ld+json",
          innerHTML: `{ "@context": "http://schema.org" }`,
        },
      },

      // <html> attributes
      htmlAttr: {
        "xmlns:cc": "http://creativecommons.org/ns#", // generates <html xmlns:cc="http://creativecommons.org/ns#">,
        empty: undefined, // generates <html empty>
      },

      // <body> attributes
      bodyAttr: {
        "action-scope": "xyz", // generates <body action-scope="xyz">
        empty: undefined, // generates <body empty>
      },

      // <noscript> tags
      noscript: {
        default: "This is content for browsers with no JS (or disabled JS)",
      },
    };
    const bgHeader = ref();
    function onScroll(position) {
      bgHeader.value = position >= 50 ? "navbar-tabs" : "navbar-tabs-top";
    }
    const layout = useLayoutStore();
    const route = useRoute();
    const clickBody = () => {
      layout.removeMenu("");
    };

    onMounted(() => {
      route.name == "simulator"
        ? ((layout.className = "bg-simulator"),
          (layout.bgDrawer = "bg-simulator-draw"))
        : ((layout.className = "bg-all"), (layout.bgDrawer = "bg-draw"));

      // route.name == "home"
      //   ? ((layout.className = "bg-all"), (layout.bgDrawer = "bg-draw"))
      //   : ((layout.className = "bg-simulator"),
      //     (layout.bgDrawer = "bg-simulator-draw"));
    });
    // useMeta(metaData);
    return {
      onScroll,
      clickBody,
      layout,
      route,
      bgHeader,
    };
  },
});
</script>
<style>
.q-field__label,
no-pointer-events,
absolute,
ellipsis {
  color: #fff;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 355ms;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
